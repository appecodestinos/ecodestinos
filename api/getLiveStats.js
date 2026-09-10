import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import {
  DESTINOS_CANONICOS,
  NOMBRES_CANONICOS,
  extraerDestinosCanonicos
} from './lib/destinos.js';

// Fuerza que Vercel no cachee ni pre-renderice esta función.
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'nodejs';

const apiKey = process.env.BREVO_API_KEY;

const emptyCounts = () => {
  const c = {};
  DESTINOS_CANONICOS.forEach((k) => { c[k] = 0; });
  return c;
};

// ---------- Firestore Admin ----------
let adminApp = null;
let adminFirestore = null;

function getAdminFirestore() {
  if (adminFirestore) return adminFirestore;

  const credsRaw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!credsRaw) return null;

  try {
    if (!adminApp) {
      adminApp = initializeApp({ credential: cert(JSON.parse(credsRaw)) }, 'getLiveStats');
    }
    adminFirestore = getFirestore(adminApp);
    console.log('🟢 [getLiveStats] Firestore Admin inicializado correctamente.');
    return adminFirestore;
  } catch (err) {
    console.error('🔴 [getLiveStats] No se pudo inicializar Firestore Admin:', err.message || err);
    return null;
  }
}

// ---------- Fuente 1: Brevo (autoritativa: el lead SIEMPRE se crea aquí) ----------
// Paginación completa: recorre TODOS los contactos (limit=500, offset en +500)
// y extrae los destinos de DESTINOS/DESTINO o de cualquier atributo string.
async function leerLeadsDesdeBrevo(agregar, diagnostico) {
  if (!apiKey) {
    console.warn('🟡 [getLiveStats] Sin BREVO_API_KEY: se omite la lectura de contactos. apiKey =', apiKey);
    diagnostico.brevo = { error: 'Falta BREVO_API_KEY en el entorno de Vercel' };
    return;
  }

  let offset = 0;
  const limit = 500;
  let totalContactos = 0;
  let contactosConDestinos = 0;
  let muestras = [];

  console.log(`🟡 [getLiveStats] Iniciando lectura de contactos Brevo. apiKey presente (${apiKey.slice(0, 6)}...)`);

  try {
    while (offset <= 50000) {
      const url = `https://api.brevo.com/v3/contacts?limit=${limit}&offset=${offset}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'api-key': apiKey
        }
      });

      console.log(`🟡 [getLiveStats] Brevo GET ${url} -> Status ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error fetching contacts from Brevo (Status ${response.status}): ${errorText}`);
      }

      const data = await response.json();
      const contacts = data.contacts || [];
      totalContactos += contacts.length;

      contacts.forEach((contact) => {
        const attributes = contact.attributes || {};
        const destinos = findByDestinos(attributes);
        const canonicos = extraerDestinosCanonicos(destinos);

        if (canonicos.length > 0) {
          agregar(contact.email, canonicos);
          contactosConDestinos += 1;
        }
      });

      if (contacts.length > 0 && muestras.length < 3) {
        muestras = contacts.slice(0, 3).map((c) => ({
          email: (c.email || '').slice(0, 30),
          attributes: c.attributes || null
        }));
      }

      if (contacts.length < limit) break;
      offset += limit;
    }

    diagnostico.brevo = {
      ok: true,
      status: '200',
      totalContactos,
      contactosConDestinos,
      muestras
    };
    console.log(`🟢 [getLiveStats] Brevo OK: ${totalContactos} contactos, ${contactosConDestinos} con destinos. Muestra:`, JSON.stringify(muestras));
  } catch (err) {
    diagnostico.brevo = { ok: false, error: (err && err.message) || err.toString() };
    console.error('🔴 [getLiveStats] Error leyendo Brevo:', err);
    throw err;
  }
}

// Busca destinos en los atributos de un contacto Brevo:
// 1) Atributos explícitos DESTINOS / DESTINO / destinos / destino.
// 2) Heurística: CUALQUIER atributo string cuyo valor se normalice a un territorio.
function findByDestinos(attributes) {
  if (!attributes || typeof attributes !== 'object') return '';

  const directo = attributes.DESTINOS
    || attributes.DESTINO
    || attributes.destinos
    || attributes.destino
    || '';

  const directoCanonico = extraerDestinosCanonicos(directo);
  if (directoCanonico.length > 0) return directo;

  // Atributos que claramente NO son territorio (datos personales/contacto).
  const EXCLUIDOS = /nombre|name|prénom|vorname|apellido|lastname|email|correo|phone|telefono|tel|direccion|address|ciudad|city|pais|country|empresa|company|birth|nacimiento|codigo|zip|recaptcha|utm|lang|idioma/i;

  const hallazgos = [];
  Object.entries(attributes).forEach(([, valor]) => {
    if (typeof valor !== 'string' || !valor.trim()) return;
    if (EXCLUIDOS.test(valor)) return;
    extraerDestinosCanonicos(valor).forEach((id) => {
      if (!hallazgos.includes(id)) hallazgos.push(id);
    });
  });

  return hallazgos.join(', ');
}

// ---------- Fuente primaria: Firestore (sin delay de indexación) ----------
// Lee 'leads' y 'stats' (si existen) y normaliza cada destino guardado.
async function leerLeadsDesdeFirestore(agregar, diagnostico) {
  const fs = getAdminFirestore();
  if (!fs) {
    diagnostico.firestore = { ok: false, error: 'Falta FIREBASE_SERVICE_ACCOUNT o no se pudo inicializar' };
    console.warn('🟡 [getLiveStats] Firestore no inicializado: se omite la colección leads.');
    return;
  }

  let totalDocs = 0;
  try {
    const colecciones = ['leads', 'stats'];

    for (const nombre of colecciones) {
      const snapshot = await fs.collection(nombre).get();
      if (snapshot.size === 0) continue;

      const conDestinos = { count: 0, docs: [] };

      snapshot.forEach((doc) => {
        const data = doc.data() || {};
        const correo = data.correo || data.email || data['Correo'] || data['Correo Electronico'] || '';
        const destinos = data.destinos || data.DESTINOS || data.destino || data['Destinos'] || '';

        const canonicos = extraerDestinosCanonicos(destinos);
        if (canonicos.length > 0) {
          conDestinos.count += 1;
          if (conDestinos.docs.length < 3) {
            conDestinos.docs.push({ id: doc.id, correo: (correo || '').slice(0, 30), destinos });
          }
          // Cada documento puede representar varios destinos; el email deduplica.
          agregar(correo || doc.id, canonicos);
        }
      });

      totalDocs += snapshot.size;
      console.log(`🟢 [getLiveStats] Firestore "${nombre}": ${snapshot.size} documentos, ${conDestinos.count} con destinos. Muestra:`, JSON.stringify(conDestinos.docs));
    }

    diagnostico.firestore = { ok: true, totalDocs, totalLeads: totalDocs };
    console.log(`🟢 [getLiveStats] Firestore OK: ${totalDocs} documentos en leads/stats.`);
  } catch (err) {
    diagnostico.firestore = { ok: false, error: (err && err.message) || err.toString() };
    console.error('🔴 [getLiveStats] Error leyendo Firestore:', err);
  }
}

// Consulta los territorios combinando las fuentes SIN quemar cuota:
//   1) Brevo SIEMPRE primero (fuente autoritativa: el lead se crea allí y ahora
//      con el atributo DESTINOS garantizado). Sin límites de cuota.
//   2) Firestore SOLO como respaldo (datos legacy) cuando Brevo no trajo destinos
//      o falló. Así una colección grande no se lee en cada polling del mapa.
// Fusiona por email para no duplicar contactos entre fuentes.
async function consultarTerritorios(diagnostico) {
  const porEmail = new Map(); // email(minusculas) -> Set(identificador)

  const agregar = (email, destinos) => {
    if (!email) return;
    const clave = String(email).trim().toLowerCase();
    if (!clave) return;

    const canonicos = extraerDestinosCanonicos(destinos);
    if (canonicos.length === 0) return;

    if (!porEmail.has(clave)) porEmail.set(clave, new Set());
    canonicos.forEach((id) => porEmail.get(clave).add(id));
  };

  // 1) Brevo: fuente principal.
  let errorBrevo = null;
  await leerLeadsDesdeBrevo(agregar, diagnostico).catch((err) => {
    errorBrevo = err;
    console.error('🔴 [getLiveStats] Error leyendo Brevo:', (err && err.message) || err);
  });

  const brevoConDestinos = !!(diagnostico.brevo && diagnostico.brevo.contactosConDestinos > 0);
  console.log(`🟢 [getLiveStats] Brevo -> ${porEmail.size} leads únicos (conDestinos=${brevoConDestinos}).`);

  // 2) Firestore SOLO si Brevo no aportó destinos (protege la cuota).
  if (porEmail.size === 0) {
    await leerLeadsDesdeFirestore(agregar, diagnostico);
    console.log(`🟢 [getLiveStats] Firestore respaldo -> ${porEmail.size} leads únicos.`);
  }

  if (errorBrevo && porEmail.size === 0) {
    throw errorBrevo;
  }

  const fuente = porEmail.size > 0 ? (brevoConDestinos ? 'brevo' : 'firestore') : 'none';

  return { porEmail, fuente };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('CDN-Cache-Control', 'no-store');

  const debug = /\bdebug(?:=1|=\s*true)?\b/.test(req.url || '');

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const firestoreReady = !!getAdminFirestore();
  const brevoReady = !!apiKey;

  console.log('🔍 [getLiveStats] Config:', {
    firestoreReady,
    brevoReady,
    hasBrevoKey: !!apiKey,
    hasFirestoreServiceAccount: !!process.env.FIREBASE_SERVICE_ACCOUNT
  });

  if (!firestoreReady && !brevoReady) {
    console.error('🔴 [getLiveStats] Sin fuentes de datos configuradas (FIREBASE_SERVICE_ACCOUNT y BREVO_API_KEY). Devolviendo 0.');

    const response = {
      totals: emptyCounts(),
      totalContacts: 0,
      territorios: NOMBRES_CANONICOS,
      source: 'none',
      timestamp: new Date().toISOString()
    };
    if (debug) {
      response.diagnostico = {
        firestoreReady,
        brevoReady,
        error: 'Faltan FIREBASE_SERVICE_ACCOUNT y BREVO_API_KEY en Vercel'
      };
    }
    return res.status(200).json(response);
  }

  const diagnostico = { firestoreReady, brevoReady };

  try {
    const { porEmail, fuente } = await consultarTerritorios(diagnostico);

    const totals = emptyCounts();
    porEmail.forEach((territorios) => {
      territorios.forEach((id) => {
        if (totals[id] !== undefined) totals[id] += 1;
      });
    });

    console.log(`🟢 [getLiveStats] ${porEmail.size} leads únicos reales procesados (fuente=${fuente}).`, totals);

    // ⚠️ Sin leads reales: se devuelven TODOS los territorios en 0 (sin valores base).
    if (porEmail.size === 0) {
      console.warn('🟡 [getLiveStats] 0 leads reales -> devolviendo contadores en 0.');

      const response = {
        totals: emptyCounts(),
        totalContacts: 0,
        territorios: NOMBRES_CANONICOS,
        source: 'none',
        timestamp: new Date().toISOString()
      };
      if (debug) response.diagnostico = diagnostico;
      return res.status(200).json(response);
    }

    const response = {
      totals,
      totalContacts: porEmail.size,
      territorios: NOMBRES_CANONICOS,
      source: fuente,
      timestamp: new Date().toISOString()
    };
    if (debug) response.diagnostico = diagnostico;

    return res.status(200).json(response);
  } catch (error) {
    console.error('🔴 [getLiveStats] Error grave consultando Brevo:', error);

    // Ante error SIEMPRE se devuelven 0 reales, nunca valores base simulados.
    const response = {
      totals: emptyCounts(),
      totalContacts: 0,
      territorios: NOMBRES_CANONICOS,
      source: 'error',
      error: error.toString(),
      timestamp: new Date().toISOString()
    };
    if (debug) response.diagnostico = diagnostico;
    return res.status(200).json(response);
  }
}