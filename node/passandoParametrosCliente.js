// Caso o module.exports retorne uma função, é possível passar os parâmetros. 

const saudacoes = require('./passandoParametros')('Ana', 'Lucas', 'João')   // Como é uma função, pode-se passar os parâmetros que deseja.

console.log(saudacoes)