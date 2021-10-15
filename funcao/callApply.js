// Diferença do 'Call' e do 'Apply' está na chamada dos parâmetros.
// Call -> (contexto/objeto, parâmetros, ...)       contexto, param1, param2, param3, ...
// Apply -> (contexto/objeto, [parâmetros, ...])    apply: contexto, array de parâmetros

// No Apply utiliza-se array para definir os parâmetros.

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //Teste

console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))

console.log(getPreco.call(global, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))