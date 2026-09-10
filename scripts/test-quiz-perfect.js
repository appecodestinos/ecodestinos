const DESTINOS = ['Amazonas', 'Macizo', 'Guainia', 'SierraNevada', 'Pacífico', 'Putumayo', 'SabanaDeBogota', 'Antioquia'];

function generar1FactorizacionK8() {
  const n = 4;
  const vertices = [...Array(7).keys()].map(i => i + 1);
  const infinity = 8;
  const matchings = [];

  for (let i = 1; i <= 7; i++) {
    const matching = [];
    matching.push([infinity, i]);
    for (let j = 1; j <= n - 1; j++) {
      const a = ((i + j - 1) % 7) + 1;
      const b = ((i - j - 1 + 7) % 7) + 1;
      matching.push([a, b]);
    }
    matchings.push(matching);
  }

  const nombre = (v) => v === 8 ? 'Antioquia' : DESTINOS[v - 1];

  return matchings.map(matching => 
    matching.map(([a, b]) => [nombre(a), nombre(b)])
  );
}

const MAPEO_PREGUNTAS_PERFECTO = generar1FactorizacionK8();

console.log('=== MATRIZ PERFECTA (1-factorización de K8) ===');
MAPEO_PREGUNTAS_PERFECTO.forEach((pregunta, i) => {
  console.log(`Q${i}: ${JSON.stringify(pregunta)}`);
});

function verificarParesUnicos(matriz) {
  const pares = new Set();
  matriz.forEach((pregunta, qi) => {
    pregunta.forEach((par, oi) => {
      const [a, b] = par.slice().sort();
      const key = `${a}|${b}`;
      if (pares.has(key)) {
        console.log(`DUPLICADO: ${key} en Q${qi} opt${oi}`);
      }
      pares.add(key);
    });
  });
  console.log(`\nPares únicos: ${pares.size} / 28 esperados`);
  
  const todosPares = [];
  for (let i = 0; i < DESTINOS.length; i++) {
    for (let j = i + 1; j < DESTINOS.length; j++) {
      todosPares.push([DESTINOS[i], DESTINOS[j]]);
    }
  }
  const faltantes = todosPares.filter(([a, b]) => !pares.has(`${a}|${b}`));
  if (faltantes.length > 0) {
    console.log('Pares faltantes:', faltantes.map(([a, b]) => `${a}-${b}`).join(', '));
  } else {
    console.log('✅ Todos los 28 pares posibles están presentes exactamente 1 vez');
  }

  const apariciones = {};
  DESTINOS.forEach(d => apariciones[d] = 0);
  pares.forEach(p => {
    const [a, b] = p.split('|');
    apariciones[a]++;
    apariciones[b]++;
  });
  console.log('\nApariciones por destino:');
  DESTINOS.forEach(d => console.log(`  ${d}: ${apariciones[d]}`));
}

verificarParesUnicos(MAPEO_PREGUNTAS_PERFECTO);

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

console.log('\n=== SIMULACIÓN 16,384 COMBINACIONES ===\n');
const combinaciones = generarCombinaciones();

const top1Count = {};
const top2Count = {};
const top1or2Count = {};

DESTINOS.forEach(d => {
  top1Count[d] = 0;
  top2Count[d] = 0;
  top1or2Count[d] = 0;
});

combinaciones.forEach(respuestas => {
  const [top1, top2] = calcularPuntajes(respuestas, MAPEO_PREGUNTAS_PERFECTO);
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

console.log('\n=== DISTRIBUCIÓN TOP 1 O TOP 2 ===');
DESTINOS.forEach(d => {
  const pct = ((top1or2Count[d] / combinaciones.length) * 100).toFixed(2);
  console.log(`${d.padEnd(16)}: ${top1or2Count[d].toString().padStart(5)} (${pct}%)`);
});

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

console.log('\n=== CÓDIGO PARA QUIZ.JS ===');
console.log('const MAPEO_PREGUNTAS = [');
MAPEO_PREGUNTAS_PERFECTO.forEach((pregunta, i) => {
  console.log(`  ${JSON.stringify(pregunta)},  // Q${i}`);
});
console.log('];');