// Imprimindo valores/letras da string (for of)
for (let letra of 'Cod3r') {
  console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

// Imprimindo índice da array (for in)
for (let i in assuntosEcma) {
  console.log(i);
}

// Imprimido valores da array (for of)
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }],
]);

// Imprimindo chaves e valores
for (let assunto of assuntosMap) {
  console.log(assunto);
}

// Imprimindo somente chaves
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

// Imprimindo somente os valores
for (let valor of assuntosMap.values()) {
  console.log(valor);
}

// Imprimindo as entradas (entries), desestruturando um array
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}
