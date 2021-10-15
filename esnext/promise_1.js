const primeiroElemento = array => array[0];

const primeiraLetra = string => string[0];

const letraMinuscula = letra => letra.toLowerCase();

// cumprirPromessa -> resolve
new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Rafael', 'Leonardo', 'Carlos']);
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)
;
