const MAPEO_PREGUNTAS = [
  [['Putumayo', 'Macizo'], ['Antioquia', 'SierraNevada'], ['Amazonas', 'Pacífico'], ['Guainia', 'SabanaDeBogota']],
  [['Amazonas', 'Guainia'], ['Pacífico', 'Putumayo'], ['SabanaDeBogota', 'Macizo'], ['SierraNevada', 'Antioquia']],
  [['Amazonas', 'SierraNevada'], ['Pacífico', 'Guainia'], ['Macizo', 'Putumayo'], ['Antioquia', 'SabanaDeBogota']],
  [['Guainia', 'Macizo'], ['Antioquia', 'SabanaDeBogota'], ['Amazonas', 'Putumayo'], ['SierraNevada', 'Pacífico']],
  [['Amazonas', 'Antioquia'], ['Guainia', 'SierraNevada'], ['Putumayo', 'Pacífico'], ['SabanaDeBogota', 'Macizo']],
  [['SierraNevada', 'SabanaDeBogota'], ['Putumayo', 'Macizo'], ['Amazonas', 'Guainia'], ['Pacífico', 'Antioquia']],
  [['SierraNevada', 'Pacífico'], ['Amazonas', 'Macizo'], ['Guainia', 'Antioquia'], ['Putumayo', 'SabanaDeBogota']]
];

const DESTINOS = ['Amazonas', 'Macizo', 'Guainia', 'SierraNevada', 'Pacífico', 'Putumayo', 'SabanaDeBogota', 'Antioquia'];

function calcularPuntajesAleatorios(respuestas) {
  const puntajes = {};
  DESTINOS.forEach(d => puntajes[d] = 0);

  respuestas.forEach((idxSeleccion, indicePregunta) => {
    if (idxSeleccion !== null) {
      const pareja = MAPEO_PREGUNTAS[indicePregunta][idxSeleccion];
      if (Array.isArray(pareja)) {
        const destinoElegido = pareja[Math.floor(Math.random() * pareja.length)];
        if (puntajes[destinoElegido] !== undefined) {
          puntajes[destinoElegido] += 1;
        }
      }
    }
  });

  const ordenados = Object.entries(puntajes).sort((a, b) => b[1] - a[1]);
  return [ordenados[0][0], ordenados[1][0]];
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
  console.log(`Total combinaciones: ${combinaciones.length} (4^7 = 16384)`);
  console.log(`Lógica: +1 punto a 1 destino aleatorio de la pareja elegida\n`);

  const SIMULACIONES_POR_COMBINACION = 100;
  
  const top1Count = {};
  const top2Count = {};
  const top1or2Count = {};

  DESTINOS.forEach(d => {
    top1Count[d] = 0;
    top2Count[d] = 0;
    top1or2Count[d] = 0;
  });

  let procesadas = 0;
  combinaciones.forEach(respuestas => {
    for (let sim = 0; sim < SIMULACIONES_POR_COMBINACION; sim++) {
      const [top1, top2] = calcularPuntajesAleatorios(respuestas);
      top1Count[top1]++;
      top2Count[top2]++;
      top1or2Count[top1]++;
      top1or2Count[top2]++;
    }
    procesadas++;
    if (procesadas % 2000 === 0) {
      console.log(`  Procesadas ${procesadas}/${combinaciones.length}...`);
    }
  });

  const totalSimulaciones = combinaciones.length * SIMULACIONES_POR_COMBINACION;
  console.log(`\nTotal simulaciones: ${totalSimulaciones.toLocaleString()}\n`);

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

  const maxDiffTop1or2 = Math.max(...Object.values(top1or2Count)) - Math.min(...Object.values(top1or2Count));
  const expectedPct = 25.0;
  const maxDeviation = Math.max(...Object.values(top1or2Count).map(v => Math.abs((v / totalSimulaciones * 100) - expectedPct)));
  
  console.log(`\n--- Verificación ---`);
  console.log(`Desviación máxima del 25%: ${maxDeviation.toFixed(2)}%`);
  console.log(`Diferencia absoluta máxima: ${maxDiffTop1or2}`);
  
  if (maxDeviation < 0.5) {
    console.log('\n✅ EQUILIBRIO PERFECTO: Todos los destinos ~25% en Top 1+2');
  } else if (maxDeviation < 1.0) {
    console.log('\n✅ EQUILIBRIO EXCELENTE: Desviación < 1%');
  } else if (maxDeviation < 2.0) {
    console.log('\n✅ BUEN EQUILIBRIO: Desviación < 2%');
  } else {
    console.log('\n⚠️  DESBALANCEADO');
  }
}

main();