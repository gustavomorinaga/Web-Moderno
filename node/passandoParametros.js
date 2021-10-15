// Caso o module.exports retorne uma função, é possível passar os parâmetros. 

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}