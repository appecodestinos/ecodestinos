const DESTINOS = ['Amazonas', 'Macizo', 'Guainia', 'SierraNevada', 'Pacífico', 'Putumayo', 'SabanaDeBogota', 'Antioquia'];

function generar1FactorizacionK8() {
  const infinity = 8;
  const matchings = [];
  for (let i = 1; i <= 7; i++) {
    const matching = [];
    matching.push([infinity, i]);
    for (let j = 1; j <= 3; j++) {
      const a = ((i + j - 1) % 7) + 1;
      const b = ((i - j - 1 + 7) % 7) + 1;
      matching.push([a, b]);
    }
    matchings.push(matching);
  }
  const nombre = (v) => v === 8 ? 'Antioquia' : DESTINOS[v - 1];
  return matchings.map(matching => matching.map(([a, b]) => [nombre(a), nombre(b)]));
}

const MAPEO_PREGUNTAS_PERFECTO = generar1FactorizacionK8();

function calcularDestinosConPuntos(respuestas, matriz) {
  const puntajes = {};
  DESTINOS.forEach(d => puntajes[d] = 0);

  respuestas.forEach((idxSeleccion, indicePregunta) => {
    if (idxSeleccion !== null) {
      const pareja = matriz[indicePregunta][idxSeleccion];
      if (Array.isArray(pareja)) {
        const destinoElegido = pareja[Math.floor(Math.random() * pareja.length)];
        if (puntajes[destinoElegido] !== undefined) {
          puntajes[destinoElegido] += 1;
        }
      }
    }
  });

  return Object.entries(puntajes)
    .filter(([, score]) => score > 0)
    .map(([destino]) => destino);
}

function seleccionarTop2Aleatorio(destinosConPuntos) {
  if (destinosConPuntos.length === 0) return [];
  if (destinosConPuntos.length === 1) return [destinosConPuntos[0]];
  
  const shuffled = [...destinosConPuntos].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
}

function generarCombinaciones() {
  const combinaciones = [];
  const total = 4 ** 7;
  for (let i = 0; i < total; i++) {
    const respuestas = [];
    let num = i;
    for (let q = 0; q < 7; q++) {
      respuestas.push(num % 4);
      num = Math.floor(num / 4);
    }
    combinaciones.push(respuestas);
  }
  return combinaciones;
}

function main() {
  const combinaciones = generarCombinaciones();
  console.log(`Total combinaciones: ${combinaciones.length}`);
  console.log(`Lógica: +1 aleatorio por pareja → elegir 2 al azar entre los que tienen >0 puntos\n`);

  const SIMULACIONES_POR_COMBINACION = 100;
  
  const top1Count = {};
  const top2Count = {};
  const top1or2Count = {};

  DESTINOS.forEach(d => {
    top1Count[d] = 0;
    top2Count[d] = 0;
    top1or2Count[d] = 0;
  });

  combinaciones.forEach(respuestas => {
    for (let sim = 0; sim < SIMULACIONES_POR_COMBINACION; sim++) {
      const destinosConPuntos = calcularDestinosConPuntos(respuestas, MAPEO_PREGUNTAS_PERFECTO);
      const [top1, top2] = seleccionarTop2Aleatorio(destinosConPuntos);
      if (top1) top1Count[top1]++;
      if (top2) top2Count[top2]++;
      if (top1) top1or2Count[top1]++;
      if (top2) top1or2Count[top2]++;
    }
  });

  const totalSimulaciones = combinaciones.length * SIMULACIONES_POR_COMBINACION;
  console.log(`Total simulaciones: ${totalSimulaciones.toLocaleString()}\n`);

  console.log('=== DISTRIBUCIÓN TOP 1 ===');
  DESTINOS.forEach(d => {
    const pct = ((top1Count[d] / totalSimulaciones) * 100).toFixed(2);
    console.log(`${d.padEnd(16)}: ${top1Count[d].toString().padStart(7)} (${pct}%)`);
  });

  console.log('\n=== DISTRIBUCIÓN TOP 2 ===');
  DESTINOS.forEach(d => {
    const pct = ((top2Count[d] / totalSimulaciones) * 100).toFixed(2);
    console.log(`${d.padEnd(16)}: ${top2Count[d].toString().padStart(7)} (${pct}%)`);
  });

  console.log('\n=== DISTRIBUCIÓN TOP 1 + TOP 2 ===');
  DESTINOS.forEach(d => {
    const pct = ((top1or2Count[d] / totalSimulaciones) * 100).toFixed(2);
    console.log(`${d.padEnd(16)}: ${top1or2Count[d].toString().padStart(7)} (${pct}%)`);
  });

  const expectedPct = 25.0;
  const maxDeviation = Math.max(...Object.values(top1or2Count).map(v => Math.abs((v / totalSimulaciones * 100) - expectedPct)));
  const maxDiff = Math.max(...Object.values(top1or2Count)) - Math.min(...Object.values(top1or2Count));
  
  console.log(`\n--- Verificación ---`);
  console.log(`Desviación máxima del 25%: ${maxDeviation.toFixed(2)}%`);
  console.log(`Diferencia absoluta máxima: ${maxDiff}`);
  
  if (maxDeviation < 0.5) {
    console.log('\n✅ EQUILIBRIO PERFECTO: Todos los destinos ~25% en Top 1+2');
  } else if (maxDeviation < 1.0) {
    console.log('\n✅ EQUILIBRIO EXCELENTE: Desviación < 1%');
  } else if (maxDeviation < 2.0) {
    console.log('\n✅ BUEN EQUILIBRIO: Desviación < 2%');
  } else {
    console.log('\n⚠️  DESBALANCEADO');
  }

  console.log('\n=== LÓGICA FINAL PARA QUIZ.JS ===');
  console.log(`
// En responder():
const destinosConPuntos = nuevasRespuestas
  .map((idxSeleccion, indicePregunta) => {
    if (idxSeleccion === null) return null;
    const pareja = MAPEO_PREGUNTAS[indicePregunta][idxSeleccion];
    return pareja[Math.floor(Math.random() * pareja.length)];
  })
  .filter(d => d !== null);

// Eliminar duplicados
const destinosUnicos = [...new Set(destinosConPuntos)];

// Elegir 2 al azar
const shuffled = destinosUnicos.sort(() => Math.random() - 0.5);
alTerminar([shuffled[0], shuffled[1] || shuffled[0]]);
`);
}

main();