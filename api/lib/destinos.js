// =============================================================================
// Normalización GLOBAL de destinos.
// UNA sola fuente de verdad compartida por:
//   - api/submitLead.js   (guarda el nombre canónico en Brevo/Firestore)
//   - api/getLiveStats.js (lee y normaliza TODO para el Mapa Live)
// Toda variante (claves del quiz, nombres por idioma, texto libre, registros
// antiguos con otros nombres) se reduce SIEMPRE a las 8 claves canónicas del
// mapa (src/MapaLive.js -> DESTINOS[id]).
// =============================================================================

// Claves canónicas del mapa (IDs usados en totals, ID_MAPPING y Firestore).
export const DESTINOS_CANONICOS = [
  'sierra_nevada',
  'pacifico',
  'antioquia_eje_cafetero',
  'sabana_bogota',
  'macizo_san_agustin',
  'putumayo',
  'guainia',
  'amazonas'
];

// Nombre canónico (comercial) de cada clave. Es EXACTAMENTE lo que se guarda en
// Brevo/Firestore (atributo DESTINOS) y lo que muestra el mapa/las etiquetas.
export const NOMBRES_CANONICOS = {
  sierra_nevada: 'Sierra Nevada',
  pacifico: 'Pacífico',
  antioquia_eje_cafetero: 'Antioquia / Eje Cafetero',
  sabana_bogota: 'Sabana de Bogotá',
  macizo_san_agustin: 'Macizo / San Agustín',
  putumayo: 'Putumayo',
  guainia: 'Guainía',
  amazonas: 'Amazonas'
};

// Limpia un valor: quita tildes, mayúsculas, comas, guiones, espacios dobles y
// normaliza las barras "/" para que TODAS las variantes lleguen a una forma única.
export function normalizarTexto(valor) {
  if (typeof valor !== 'string') return '';
  return valor
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[,;]/g, ' ')
    .replace(/-+/g, ' ')
    .replace(/\//g, ' / ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Clave de búsqueda ultra-compacta: normaliza y elimina espacios y signos.
// Así "Macizo / San Agustín", "macizo/san agustin" y "MACIZO  SAN AGUSTIN"
// producen la MISMA clave ("macizosanagustin") y un solo alias los cubre.
export function claveBusqueda(valor) {
  return normalizarTexto(valor).replace(/[^a-z0-9]/g, '');
}

// Alias sin-normalizar: por cada cláusula [claveCanonica, alias, alias, ...]
// se genera una entrada en el mapa de equivalencias.
const ALIASES = [
  ['sierra_nevada', 'sierra nevada', 'sierranevada', 'sierra nevada de santa marta'],
  ['pacifico', 'pacifico', 'pacific', 'pazifik', 'pacifique'],
  [
    'antioquia_eje_cafetero',
    'antioquia',
    'antioquia_eje_cafetero',
    'eje cafetero',
    'ejecafetero',
    'zona cafetera',
    'zona cafetero',
    'zonacafetera',
    'antioquia / eje cafetero',
    'antioquia/eje cafetero',
    'antioquia eje cafetero',
    'antioquia / zona cafetera',
    'antioquia / zona cafetero',
    'antioquia zona cafetera',
    'antioquia / coffee zone',
    'medellin',
    'medellin / eje cafetero',
    'medellin / zona cafetera'
  ],
  [
    'sabana_bogota',
    'sabana_bogota',
    'sabana de bogota',
    'sabadabogota',
    'sabanadebogota',
    'sabana bogota',
    'sabanabogota',
    'bogota',
    'bogota sabana',
    'bogota / sabana',
    'bogota/sabana',
    'bogota / savana',
    'bogota / savanne',
    'bogota / savane',
    'sabana'
  ],
  [
    'macizo_san_agustin',
    'macizo',
    'macizo_san_agustin',
    'san agustin',
    'sanagustin',
    'macizo / san agustin',
    'macizo/san agustin',
    'macizo san agustin',
    'macizosanagustin',
    'colombian massif / san agustin',
    'massif colombien / san agustin',
    'kolumbianisches massiv / san agustin'
  ],
  ['putumayo', 'putumayo', 'putumayo / caqueta', 'putumayo/caqueta'],
  ['guainia', 'guainia'],
  [
    'amazonas',
    'amazonas',
    'amazonia',
    'amazon',
    'amazonie',
    'colombian amazon',
    'region amazonica'
  ]
];

// Mapa de equivalencias: claveBusqueda(alias) -> clave canónica.
const DESTINO_ALIASES = {};
ALIASES.forEach(([canonico, ...sinonimos]) => {
  sinonimos.forEach((alias) => {
    DESTINO_ALIASES[claveBusqueda(alias)] = canonico;
  });
});

// Convierte CUALQUIER valor (quiz, Brevo, Firestore, texto libre) a la clave
// canónica del mapa. Devuelve null si no representa ningún territorio.
export function normalizarDestinoACanonico(valor) {
  const clave = claveBusqueda(valor);
  if (!clave) return null;
  return DESTINO_ALIASES[clave] || null;
}

// Extrae todos los destinos de una entrada:
//   - strings separados por comas (Brevo) o arrays (Firestore)
//   - anidados (arrays de arrays)
// Devuelve SIEMPRE un array con las claves canónicas únicas (puede estar vacío).
export function extraerDestinosCanonicos(raw) {
  const salida = [];
  const visitar = (valor) => {
    if (Array.isArray(valor)) {
      valor.forEach(visitar);
      return;
    }
    if (typeof valor !== 'string' || !valor.trim()) return;
    valor
      .split(/[,;]/)
      .map((p) => p.trim())
      .filter(Boolean)
      .forEach((parte) => {
        const canonico = normalizarDestinoACanonico(parte);
        if (canonico && !salida.includes(canonico)) salida.push(canonico);
      });
  };
  visitar(raw);
  return salida;
}