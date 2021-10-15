// filter: filtra os valores de um array, podendo ser de mesmo tamanho ou menor.

const produtos = [
    { nome : 'Notebook', preco: 2499, fragil: true },
    { nome : 'iPad Pro', preco: 4199, fragil: true },
    { nome : 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome : 'Copo de Plástico', preco: 18.99, fragil: false }
]

//Filtrando os valores por um teste lógico (true/false):

console.log(produtos.filter(p => {
    return false
}))

const apenasCaros = p => p.preco >= 500
const apenasFrageis = p => p.fragil // == true <- não precisa do teste, só mostra se é true ou false.

console.log(produtos.filter(apenasCaros).filter(apenasFrageis))