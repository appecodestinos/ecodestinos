const MAPEO_PREGUNTAS_BALANCEADO = [
  [['Amazonas', 'Macizo'], ['Guainia', 'SierraNevada'], ['Pacífico', 'Putumayo'], ['SabanaDeBogota', 'Antioquia']],
  [['Amazonas', 'Guainia'], ['Macizo', 'Pacífico'], ['SierraNevada', 'SabanaDeBogota'], ['Putumayo', 'Antioquia']],
  [['Amazonas', 'Pacífico'], ['Macizo', 'SierraNevada'], ['Guainia', 'Putumayo'], ['SabanaDeBogota', 'Antioquia']],
  [['Amazonas', 'SierraNevada'], ['Macizo', 'Guainia'], ['Pacífico', 'SabanaDeBogota'], ['Putumayo', 'Antioquia']],
  [['Amazonas', 'Putumayo'], ['Macizo', 'SabanaDeBogota'], ['Guainia', 'Antioquia'], ['Pacífico', 'SierraNevada']],
  [['Amazonas', 'SabanaDeBogota'], ['Macizo', 'Putumayo'], ['Guainia', 'Pacífico'], ['SierraNevada', 'Antioquia']],
  [['Amazonas', 'Antioquia'], ['Macizo', 'Guainia'], ['Pacífico', 'Putumayo'], ['SierraNevada', 'SabanaDeBogota']]
];

const DESTINOS = ['Amazonas', 'Macizo', 'Guainia', 'SierraNevada', 'Pacífico', 'Putumayo', 'SabanaDeBogota', 'Antioquia'];

function verificarParesUnicos(matriz) {
  const pares = new Set();
  matriz.forEach((pregunta, qi) => {
    pregunta.forEach((par, oi) => {
      const [a, b] = par.sort();
      const key = `${a}|${b}`;
      if (pares.has(key)) {
        console.log(`DUPLICADO: ${key} en Q${qi} opt${oi}`);
      }
      pares.add(key);
    });
  });
  console.log(`Pares únicos: ${pares.size} / 28 esperados`);
  
  const todosPares = [];
  for (let i = 0; i < DESTINOS.length; i++) {
    for (let j = i + 1; j < DESTINOS.length; j++) {
      todosPares.push([DESTINOS[i], DESTINOS[j]]);
    }
  }
  const faltantes = todosPares.filter(([a, b]) => !pares.has(`${a}|${b}`));
  if (faltantes.length > 0) {
    console.log('Pares faltantes:', faltantes.map(([a, b]) => `${a}-${b}`).join(', '));
  }
}

function calcularPuntajes(respuestas, matriz) {
  const puntajes = {};
  DESTINOS.forEach(d => puntajes[d] = 0);

  respuestas.forEach((idxSeleccion, indicePregunta) => {
    if (idxSeleccion !== null) {
      const territoriosAsignados = matriz[indicePregunta][idxSeleccion];
      if (Array.isArray(territoriosAsignados)) {
        territoriosAsignados.forEach((territorio) => {
          if (puntajes[territorio] !== undefined) {
            puntajes[territorio] += 1;
          }
        });
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
  console.log('=== VERIFICACIÓN DE MATRIZ BALANCEADA ===\n');
  verificarParesUnicos(MAPEO_PREGUNTAS_BALANCEADO);
  
  const combinaciones = generarCombinaciones();
  console.log(`\nTotal combinaciones a evaluar: ${combinaciones.length} (4^7 = 16384)\n`);

  const top1Count = {};
  const top2Count = {};
  const top1or2Count = {};

  DESTINOS.forEach(d => {
    top1Count[d] = 0;
    top2Count[d] = 0;
    top1or2Count[d] = 0;
  });

  combinaciones.forEach(respuestas => {
    const [top1, top2] = calcularPuntajes(respuestas, MAPEO_PREGUNTAS_BALANCEADO);
    top1Count[top1]++;
    top2Count[top2]++;
    top1or2Count[top1]++;
    top1or2Count[top2]++;
  });

  console.log('=== DISTRIBUCIÓN TOP 1 (Primer lugar) ===');
  DESTINOS.forEach(d => {
    const pct = ((top1Count[d] / combinaciones.length) * 100).toFixed(2);
    console.log(`${d.padEnd(16)}: ${top1Count[d].toString().padStart(5)} (${pct}%)`);
  });

  console.log('\n=== DISTRIBUCIÓN TOP 2 (Segundo lugar) ===');
  DESTINOS.forEach(d => {
    const pct = ((top2Count[d] / combinaciones.length) * 100).toFixed(2);
    console.log(`${d.padEnd(16)}: ${top2Count[d].toString().padStart(5)} (${pct}%)`);
  });

  console.log('\n=== DISTRIBUCIÓN TOP 1 O TOP 2 (Aparece en primeros 2 lugares) ===');
  DESTINOS.forEach(d => {
    const pct = ((top1or2Count[d] / combinaciones.length) * 100).toFixed(2);
    console.log(`${d.padEnd(16)}: ${top1or2Count[d].toString().padStart(5)} (${pct}%)`);
  });

  const totalTop1 = Object.values(top1Count).reduce((a, b) => a + b, 0);
  const totalTop2 = Object.values(top2Count).reduce((a, b) => a + b, 0);
  const totalTop1or2 = Object.values(top1or2Count).reduce((a, b) => a + b, 0);

  console.log(`\n--- Verificaciones ---`);
  console.log(`Total Top 1: ${totalTop1} (esperado: ${combinaciones.length})`);
  console.log(`Total Top 2: ${totalTop2} (esperado: ${combinaciones.length})`);
  console.log(`Total Top 1+2: ${totalTop1or2} (esperado: ${combinaciones.length * 2})`);

  const expectedPerDestino = combinaciones.length / DESTINOS.length;
  console.log(`\nEsperado por destino (Top 1): ${expectedPerDestino} (${(100/DESTINOS.length).toFixed(2)}%)`);
  console.log(`Esperado por destino (Top 1+2): ${expectedPerDestino * 2} (${(200/DESTINOS.length).toFixed(2)}%)`);

  const maxDiffTop1 = Math.max(...Object.values(top1Count)) - Math.min(...Object.values(top1Count));
  const maxDiffTop1or2 = Math.max(...Object.values(top1or2Count)) - Math.min(...Object.values(top1or2Count));
  console.log(`\nDiferencia máxima Top 1: ${maxDiffTop1}`);
  console.log(`Diferencia máxima Top 1+2: ${maxDiffTop1or2}`);

  if (maxDiffTop1or2 <= 2) {
    console.log('\n✅ DISTRIBUCIÓN PERFECTAMENTE EQUILIBRADA');
  } else if (maxDiffTop1or2 <= 20) {
    console.log('\n✅ DISTRIBUCIÓN BIEN EQUILIBRADA');
  } else {
    console.log('\n⚠️  DISTRIBUCIÓN DESBALANCEADA');
  }

  console.log('\n=== MATRIZ BALANCEADA PARA USAR EN QUIZ.JS ===');
  console.log('const MAPEO_PREGUNTAS = [');
  MAPEO_PREGUNTAS_BALANCEADO.forEach((pregunta, i) => {
    console.log(`  ${JSON.stringify(pregunta)},  // Q${i}`);
  });
  console.log('];');
}

main();