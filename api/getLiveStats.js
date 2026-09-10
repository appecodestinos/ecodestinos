import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const apiKey = process.env.BREVO_API_KEY;

// Llaves canónicas: EXACTAMENTE las mismas que consume MapaLive (/src/MapaLive.js -> ID_MAPPING)
const CANONICAL_KEYS = [
  'SIERRA NEVADA',
  'PACÍFICO',
  'ANTIOQUIA / EJE CAFETERO',
  'SABANA DE BOGOTÁ',
  'MACIZO / SAN AGUSTÍN',
  'PUTUMAYO',
  'GUAINÍA',
  'AMAZONAS'
];

const emptyCounts = () => {
  const c = {};
  CANONICAL_KEYS.forEach(k => c[k] = 0);
  return c;
};

// Esta normalización es la columna vertebral del conteo: convierte cualquier
// nombre (claves del quiz, nombres por idioma, texto libre) -> llave canónica.
const DESTINO_ALIASES = {
  'AMAZONAS': 'AMAZONAS',
  'AMAZONIA': 'AMAZONAS',
  'AMAZON': 'AMAZONAS',
  'AMAZONIE': 'AMAZONAS',
  'MACIZO': 'MACIZO / SAN AGUSTÍN',
  'MACIZO / SAN AGUSTIN': 'MACIZO / SAN AGUSTÍN',
  'SAN AGUSTIN': 'MACIZO / SAN AGUSTÍN',
  'COLOMBIAN MASSIF / SAN AGUSTIN': 'MACIZO / SAN AGUSTÍN',
  'KOLUMBIANISCHES MASSIV / SAN AGUSTIN': 'MACIZO / SAN AGUSTÍN',
  'MASSIF COLOMBIEN / SAN AGUSTIN': 'MACIZO / SAN AGUSTÍN',
  'GUAINIA': 'GUAINÍA',
  'SIERRANEVADA': 'SIERRA NEVADA',
  'SIERRA NEVADA': 'SIERRA NEVADA',
  'PACIFICO': 'PACÍFICO',
  'PACIFIC': 'PACÍFICO',
  'PAZIFIK': 'PACÍFICO',
  'PACIFIQUE': 'PACÍFICO',
  'PUTUMAYO': 'PUTUMAYO',
  'PUTUMAYO / CAQUETA': 'PUTUMAYO',
  'SABANADEBOGOTA': 'SABANA DE BOGOTÁ',
  'BOGOTA': 'SABANA DE BOGOTÁ',
  'BOGOTA / SABANA': 'SABANA DE BOGOTÁ',
  'BOGOTA / SAVANA': 'SABANA DE BOGOTÁ',
  'BOGOTA / SAVANNE': 'SABANA DE BOGOTÁ',
  'BOGOTA / SAVANE': 'SABANA DE BOGOTÁ',
  'SABANA': 'SABANA DE BOGOTÁ',
  'ANTIOQUIA': 'ANTIOQUIA / EJE CAFETERO',
  'ANTIOQUIA / ZONA CAFETERA': 'ANTIOQUIA / EJE CAFETERO',
  'ANTIOQUIA / COFFEE ZONE': 'ANTIOQUIA / EJE CAFETERO',
  'ANTIOQUIA / KAFFEREGION': 'ANTIOQUIA / EJE CAFETERO',
  'ANTIOQUIA / KAFFEEREGION': 'ANTIOQUIA / EJE CAFETERO',
  'ANTIOQUIA / ZONE CAFEIERE': 'ANTIOQUIA / EJE CAFETERO',
  'EJE CAFETERO': 'ANTIOQUIA / EJE CAFETERO',
  'MEDELLIN': 'ANTIOQUIA / EJE CAFETERO'
};

function normalizeDestino(value) {
  if (typeof value !== 'string') return null;
  const upper = value.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return DESTINO_ALIASES[upper] || null;
}

// Extrae destinos de un lead: soporta array (Firestore) o string separado por comas (Brevo).
function extraerDestinos(raw) {
  const list = Array.isArray(raw) ? raw : (typeof raw === 'string' ? raw.split(',') : []);
  return list.map(normalizeDestino).filter(Boolean);
}

// ---------- Fuente 1: Firestore (la más confiable) ----------
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

async function countFromFirestore() {
  const fs = getAdminFirestore();
  if (!fs) return null;

  const counts = emptyCounts();
  let processed = 0;

  const snapshot = await fs.collection('leads').get();

  snapshot.forEach((doc) => {
    const data = doc.data() || {};
    const destinos = data.destinos;
    if (destinos) {
      extraerDestinos(destinos).forEach((canonical) => {
        if (counts[canonical] !== undefined) counts[canonical] += 1;
      });
      processed += 1;
    }
  });

  console.log(`🟢 [getLiveStats] Conteo desde Firestore: ${processed} leads procesados.`, counts);
  return { counts, total: snapshot.size, processed };
}

// ---------- Fuente 2: Brevo (fallback) ----------
async function countFromBrevo() {
  const counts = emptyCounts();

  let allContacts = [];
  let offset = 0;
  const limit = 500;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`https://api.brevo.com/v3/contacts?limit=${limit}&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'api-key': apiKey
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error fetching contacts from Brevo (Status ${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const contacts = data.contacts || [];
    allContacts = allContacts.concat(contacts);

    hasMore = contacts.length === limit;
    offset += limit;
  }

  allContacts.forEach((contact) => {
    const attributes = contact.attributes || {};
    const destinos = attributes.DESTINOS || attributes.destinos || '';
    if (destinos) {
      extraerDestinos(destinos).forEach((canonical) => {
        if (counts[canonical] !== undefined) counts[canonical] += 1;
      });
    }
  });

  console.log(`🟢 [getLiveStats] Conteo desde Brevo: ${allContacts.length} contactos totales.`, counts);
  return { counts, total: allContacts.length };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const firestoreReady = !!getAdminFirestore();
  const brevoReady = !!apiKey;

  if (!firestoreReady && !brevoReady) {
    console.error('🔴 [getLiveStats] Sin fuente de datos: falta FIREBASE_SERVICE_ACCOUNT y BREVO_API_KEY.');
    return res.status(500).json({
      message: 'Error de configuración del servidor: Faltan FIREBASE_SERVICE_ACCOUNT y BREVO_API_KEY'
    });
  }

  try {
    // 1. Firestore (fuente primaria: garantiza el conteo aunque Brevo no tenga atributos)
    if (firestoreReady) {
      try {
        const firestoreResult = await countFromFirestore();
        if (firestoreResult) {
          return res.status(200).json({
            totals: firestoreResult.counts,
            totalContacts: firestoreResult.total,
            source: 'firestore',
            timestamp: new Date().toISOString()
          });
        }
      } catch (err) {
        console.error('🔴 [getLiveStats] Error leyendo Firestore, pasando a fallback Brevo:', err.message || err);
      }
    }

    // 2. Brevo (fallback)
    if (brevoReady) {
      const brevoResult = await countFromBrevo();
      return res.status(200).json({
        totals: brevoResult.counts,
        totalContacts: brevoResult.total,
        source: 'brevo',
        timestamp: new Date().toISOString()
      });
    }

    // 3. Ninguna fuente funcionó: devolver ceros para no romper el mapa
    console.error('🔴 [getLiveStats] Ambas fuentes fallaron. Devolviendo contadores en cero.');
    return res.status(200).json({
      totals: emptyCounts(),
      totalContacts: 0,
      source: 'none',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('🔴 [getLiveStats] Error grave:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error: error.toString() });
  }
}