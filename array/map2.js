const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços (desafio):

// Meu método:
let resultado = carrinho.map(e => {
    return (JSON.parse(e)).preco
})

console.log(resultado)

// Método do Professor:
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map(paraObjeto).map(apenasPreco))