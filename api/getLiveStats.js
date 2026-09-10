import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Fuerza que Vercel no cachee ni pre-renderice esta función.
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'nodejs';

const apiKey = process.env.BREVO_API_KEY;

// Identificadores canónicos COMUNES: MISMA clave en Brevo, Firestore, este endpoint
// y el mapa (src/MapaLive.js -> ID_MAPPING). Ej: 'antioquia_eje_cafetero' agrupa
// "Antioquia / Zona Cafetera", "ANTIOQUIA / EJE CAFETERO", "Eje Cafetero", "Medellín", etc.
const IDENTIFICADORES = [
  'sierra_nevada',
  'pacifico',
  'antioquia_eje_cafetero',
  'sabana_bogota',
  'macizo_san_agustin',
  'putumayo',
  'guainia',
  'amazonas'
];

// Nombre comercial de cada territorio (para el mapa y para depuración).
const NOMBRES_TERRITORIOS = {
  sierra_nevada: 'Sierra Nevada',
  pacifico: 'Pacífico',
  antioquia_eje_cafetero: 'Antioquia / Eje Cafetero',
  sabana_bogota: 'Sabana de Bogotá',
  macizo_san_agustin: 'Macizo / San Agustín',
  putumayo: 'Putumayo',
  guainia: 'Guainía',
  amazonas: 'Amazonas'
};

// Conteo base dinámico: si Brevo/Firestore no entregan leads reales (API key ausente,
// arrray vacío o error), se usa este base para que los marcadores NUNCA queden en 0.
// Se puede sobrescribir desde Vercel con la variable FALLBACK_LEADS (JSON válido).
const DEFAULT_FALLBACK_LEADS = {
  sierra_nevada: 12,
  pacifico: 18,
  antioquia_eje_cafetero: 24,
  sabana_bogota: 15,
  macizo_san_agustin: 9,
  putumayo: 7,
  guainia: 5,
  amazonas: 11
};

function getFallbackLeads() {
  const raw = process.env.FALLBACK_LEADS;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && IDENTIFICADORES.some((id) => parsed[id] !== undefined)) {
        console.log('🟢 [getLiveStats] Fallback configurado desde FALLBACK_LEADS:', parsed);
        return parsed;
      }
      console.warn('🟡 [getLiveStats] FALLBACK_LEADS inválido, se usará el base por defecto.');
    } catch (e) {
      console.error('🔴 [getLiveStats] FALLBACK_LEADS no es JSON válido:', e.message || e);
    }
  }
  return DEFAULT_FALLBACK_LEADS;
}

const emptyCounts = () => {
  const c = {};
  IDENTIFICADORES.forEach(k => c[k] = 0);
  return c;
};

// Normalización: convierte CUALQUIER variante (claves del quiz, nombres por idioma,
// texto libre o lo que guarde el formulario/Brevo) -> identificador canónico.
// ⚠️ Las claves van SIN tildes y EN MAYÚSCULAS (normalizeDestino lo hace antes de buscar).
const DESTINO_ALIASES = {
  // Amazonas
  'AMAZONAS': 'amazonas',
  'AMAZONIA': 'amazonas',
  'AMAZON': 'amazonas',
  'AMAZONIE': 'amazonas',
  // Macizo / San Agustín
  'MACIZO': 'macizo_san_agustin',
  'MACIZO / SAN AGUSTIN': 'macizo_san_agustin',
  'MACIZO/SAN AGUSTIN': 'macizo_san_agustin',
  'SAN AGUSTIN': 'macizo_san_agustin',
  'COLOMBIAN MASSIF / SAN AGUSTIN': 'macizo_san_agustin',
  'COLOMBIAN MASSIF / SAN AGUSTIN ': 'macizo_san_agustin',
  'KOLUMBIANISCHES MASSIV / SAN AGUSTIN': 'macizo_san_agustin',
  'MASSIF COLOMBIEN / SAN AGUSTIN': 'macizo_san_agustin',
  // Guainía
  'GUAINIA': 'guainia',
  // Sierra Nevada
  'SIERRANEVADA': 'sierra_nevada',
  'SIERRA NEVADA': 'sierra_nevada',
  'SIERRA NEVADA DE SANTA MARTA': 'sierra_nevada',
  // Pacífico
  'PACIFICO': 'pacifico',
  'PACIFIC': 'pacifico',
  'PAZIFIK': 'pacifico',
  'PACIFIQUE': 'pacifico',
  // Putumayo
  'PUTUMAYO': 'putumayo',
  'PUTUMAYO / CAQUETA': 'putumayo',
  'PUTUMAYO/CAQUETA': 'putumayo',
  // Sabana de Bogotá
  'SABANADEBOGOTA': 'sabana_bogota',
  'SABANA DE BOGOTA': 'sabana_bogota',
  'SABANA BOGOTA': 'sabana_bogota',
  'BOGOTA': 'sabana_bogota',
  'BOGOTA / SABANA': 'sabana_bogota',
  'BOGOTA/SABANA': 'sabana_bogota',
  'BOGOTA / SAVANA': 'sabana_bogota',
  'BOGOTA / SAVANNE': 'sabana_bogota',
  'BOGOTA / SAVANE': 'sabana_bogota',
  'SABANA': 'sabana_bogota',
  // Antioquia / Eje Cafetero
  'ANTIOQUIA': 'antioquia_eje_cafetero',
  'ANTIOQUIA / ZONA CAFETERA': 'antioquia_eje_cafetero',
  'ANTIOQUIA/ZONA CAFETERA': 'antioquia_eje_cafetero',
  'ANTIOQUIA / EJE CAFETERO': 'antioquia_eje_cafetero',
  'ANTIOQUIA/EJE CAFETERO': 'antioquia_eje_cafetero',
  'ANTIOQUIA / COFFEE ZONE': 'antioquia_eje_cafetero',
  'ANTIOQUIA / KAFFEREGION': 'antioquia_eje_cafetero',
  'ANTIOQUIA / KAFFEEREGION': 'antioquia_eje_cafetero',
  'ANTIOQUIA / ZONE CAFEIERE': 'antioquia_eje_cafetero',
  'EJE CAFETERO': 'antioquia_eje_cafetero',
  'ZONA CAFETERA': 'antioquia_eje_cafetero',
  'COFFEE ZONE': 'antioquia_eje_cafetero',
  'MEDELLIN': 'antioquia_eje_cafetero',
  'MEDELLIN / EJE CAFETERO': 'antioquia_eje_cafetero',
  'MEDELLIN / ZONA CAFETERA': 'antioquia_eje_cafetero'
};

function normalizeDestino(value) {
  if (typeof value !== 'string') return null;
  const upper = value.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return DESTINO_ALIASES[upper] || null;
}

// Extrae destinos de un lead: soporta array (Firestore) o string separado por comas (Brevo).
function extraerDestinos(raw) {
  const list = Array.isArray(raw) ? raw : (typeof raw === 'string' ? raw.split(',').map((d) => d.trim()) : []);
  return list.map(normalizeDestino).filter(Boolean);
}

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
        const destinos = attributes.DESTINOS || attributes.destinos || '';

        // Heurística: si el atributo DESTINOS no existe, escanea TODOS los atributos
        // en busca del nombre de un territorio (por si Brevo lo guardó con otra clave).
        if (!destinos && attributes && typeof attributes === 'object') {
          const barrido = Object.entries(attributes)
            .filter(([, v]) => typeof v === 'string')
            .map(([k, v]) => v)
            .join(', ');
          const delBarrido = extraerDestinos(barrido);
          if (delBarrido.length > 0) {
            agregar(contact.email, delBarrido);
            contactosConDestinos += 1;
            return;
          }
        }

        if (destinos) {
          agregar(contact.email, destinos);
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

// ---------- Fuente 2: Firestore (complementa leads que solo existan ahí) ----------
async function leerLeadsDesdeFirestore(agregar, diagnostico) {
  const fs = getAdminFirestore();
  if (!fs) {
    diagnostico.firestore = { ok: false, error: 'Falta FIREBASE_SERVICE_ACCOUNT o no se pudo inicializar' };
    console.warn('🟡 [getLiveStats] Firestore no inicializado: se omite la colección leads.');
    return;
  }

  try {
    const snapshot = await fs.collection('leads').get();
    diagnostico.firestore = { ok: true, totalDocs: snapshot.size };
    console.log(`🟢 [getLiveStats] Firestore OK: ${snapshot.size} documentos en "leads".`);

    snapshot.forEach((doc) => {
      const data = doc.data() || {};
      const correo = data.correo || data.email || data['Correo'] || '';
      const destinos = data.destinos || data.DESTINOS || '';
      agregar(correo, destinos);
    });
  } catch (err) {
    diagnostico.firestore = { ok: false, error: (err && err.message) || err.toString() };
    console.error('🔴 [getLiveStats] Error leyendo Firestore:', err);
  }
}

// Consulta AMBAS fuentes y fusiona por email para NO duplicar leads que están
// tanto en Firestore como en Brevo. El resultado es email -> Set(identificador).
async function consultarTerritoriosPorEmail(diagnostico) {
  const porEmail = new Map(); // email(minusculas) -> Set(identificador)

  const agregar = (email, rawDestinos) => {
    if (!email) return;
    const clave = String(email).trim().toLowerCase();
    if (!clave) return;

    const destinosNorm = extraerDestinos(rawDestinos);
    if (destinosNorm.length === 0) return;

    if (!porEmail.has(clave)) porEmail.set(clave, new Set());
    destinosNorm.forEach((id) => porEmail.get(clave).add(id));
  };

  let errorBrevo = null;
  await leerLeadsDesdeBrevo(agregar, diagnostico).catch((err) => {
    errorBrevo = err;
  });

  await leerLeadsDesdeFirestore(agregar, diagnostico);

  if (errorBrevo && porEmail.size === 0) {
    throw errorBrevo;
  }

  return porEmail;
}

// Conteo base dinámico: devuelve totals a partir del fallback configurado.
function contarFallback() {
  const base = getFallbackLeads();
  const totals = emptyCounts();
  let total = 0;
  IDENTIFICADORES.forEach((id) => {
    const v = Number(base[id]);
    if (Number.isFinite(v) && v > 0) {
      totals[id] = Math.round(v);
      total += Math.round(v);
    }
  });
  return { totals, totalContacts: total };
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
    console.error('🔴 [getLiveStats] Sin fuente de datos: falta FIREBASE_SERVICE_ACCOUNT y BREVO_API_KEY. Usando fallback.');

    if (debug) {
      return res.status(200).json({
        totals: emptyCounts(),
        totalContacts: 0,
        territorios: NOMBRES_TERRITORIOS,
        source: 'fallback',
        fallback: true,
        demo: true,
        mensaje: 'Sin fuentes configuradas en Vercel. No hay contadores reales.',
        diagnostico: {
          firestoreReady,
          brevoReady,
          error: 'Faltan FIREBASE_SERVICE_ACCOUNT y BREVO_API_KEY'
        },
        timestamp: new Date().toISOString()
      });
    }

    const fb = contarFallback();
    return res.status(200).json({
      totals: fb.totals,
      totalContacts: fb.totalContacts,
      territorios: NOMBRES_TERRITORIOS,
      source: 'fallback',
      fallback: true,
      demo: true,
      mensaje: 'Conteo base temporal (sin fuentes de datos configuradas en Vercel).',
      timestamp: new Date().toISOString()
    });
  }

  const diagnostico = { firestoreReady, brevoReady };

  try {
    const porEmail = await consultarTerritoriosPorEmail(diagnostico);

    const totals = emptyCounts();
    porEmail.forEach((territorios) => {
      territorios.forEach((id) => {
        if (totals[id] !== undefined) totals[id] += 1;
      });
    });

    console.log(`🟢 [getLiveStats] ${porEmail.size} leads únicos reales procesados.`, totals);

    // ⚠️ Si no hay NINGÚN lead real contado (ej. Brevo devolvió array vacío o sin
    // atributo DESTINOS), se devuelve el conteo base para que el mapa NO quede en 0.
    if (porEmail.size === 0) {
      console.warn('🟡 [getLiveStats] 0 leads reales detectados -> activando conteo base (no-0).');
      const fb = contarFallback();
      const response = {
        totals: fb.totals,
        totalContacts: fb.totalContacts,
        territorios: NOMBRES_TERRITORIOS,
        source: 'fallback',
        fallback: true,
        demo: true,
        mensaje: 'Conteo base temporal: no se detectaron leads reales en Brevo/Firestore.',
        timestamp: new Date().toISOString()
      };
      if (debug) response.diagnostico = diagnostico;
      return res.status(200).json(response);
    }

    const source = (brevoReady && firestoreReady)
      ? 'brevo+firestore'
      : (brevoReady ? 'brevo' : 'firestore');

    const response = {
      totals,
      totalContacts: porEmail.size,
      territorios: NOMBRES_TERRITORIOS,
      source,
      timestamp: new Date().toISOString()
    };
    if (debug) response.diagnostico = diagnostico;

    return res.status(200).json(response);
  } catch (error) {
    console.error('🔴 [getLiveStats] Error grave consultando Brevo:', error);

    if (debug) {
      return res.status(200).json({
        totals: emptyCounts(),
        totalContacts: 0,
        territorios: NOMBRES_TERRITORIOS,
        source: 'error',
        diagnostico,
        error: error.toString(),
        timestamp: new Date().toISOString()
      });
    }

    const fb = contarFallback();
    return res.status(200).json({
      totals: fb.totals,
      totalContacts: fb.totalContacts,
      territorios: NOMBRES_TERRITORIOS,
      source: 'fallback',
      fallback: true,
      demo: true,
      mensaje: 'Conteo base temporal: error al consultar Brevo.',
      error: error.toString(),
      timestamp: new Date().toISOString()
    });
  }
}