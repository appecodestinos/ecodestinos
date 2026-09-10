import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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
async function leerLeadsDesdeBrevo(agregar) {
  if (!apiKey) {
    console.warn('🟡 [getLiveStats] Sin BREVO_API_KEY: se omite la lectura de contactos.');
    return;
  }

  let offset = 0;
  const limit = 500;

  // Evita loops infinitos ante desbordes de offsets
  while (offset <= 50000) {
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

    contacts.forEach((contact) => {
      const attributes = contact.attributes || {};
      const destinos = attributes.DESTINOS || attributes.destinos || '';
      agregar(contact.email, destinos);
    });

    if (contacts.length < limit) break;
    offset += limit;
  }
}

// ---------- Fuente 2: Firestore (complementa leads que solo existan ahí) ----------
async function leerLeadsDesdeFirestore(agregar) {
  const fs = getAdminFirestore();
  if (!fs) return;

  const snapshot = await fs.collection('leads').get();

  snapshot.forEach((doc) => {
    const data = doc.data() || {};
    const correo = data.correo || data.email || data['Correo'] || '';
    const destinos = data.destinos || data.DESTINOS || '';
    agregar(correo, destinos);
  });
}

// Consulta AMBAS fuentes y fusiona por email para NO duplicar leads que están
// tanto en Firestore como en Brevo. El resultado es email -> Set(identificador).
async function consultarTerritoriosPorEmail() {
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
  try {
    await leerLeadsDesdeBrevo(agregar);
    console.log(`🟢 [getLiveStats] Brevo consultado correctamente.`);
  } catch (err) {
    errorBrevo = err;
    console.error('🔴 [getLiveStats] Error leyendo Brevo:', err.message || err);
  }

  try {
    await leerLeadsDesdeFirestore(agregar);
    console.log(`🟢 [getLiveStats] Firestore consultado correctamente.`);
  } catch (err) {
    console.error('🔴 [getLiveStats] Error leyendo Firestore:', err.message || err);
  }

  if (errorBrevo && porEmail.size === 0) {
    throw errorBrevo;
  }

  return porEmail;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

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
    const porEmail = await consultarTerritoriosPorEmail();

    const totals = emptyCounts();
    porEmail.forEach((territorios) => {
      territorios.forEach((id) => {
        if (totals[id] !== undefined) totals[id] += 1;
      });
    });

    console.log(`🟢 [getLiveStats] ${porEmail.size} leads únicos procesados.`, totals);

    const source = (brevoReady && firestoreReady)
      ? 'brevo+firestore'
      : (brevoReady ? 'brevo' : 'firestore');

    return res.status(200).json({
      totals,
      totalContacts: porEmail.size,
      territorios: NOMBRES_TERRITORIOS,
      source,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('🔴 [getLiveStats] Error grave:', error);
    return res.status(500).json({
      message: 'Error al consultar los contadores del mapa',
      error: error.toString()
    });
  }
}