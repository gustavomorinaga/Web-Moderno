// Simulação fo filter:

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome : 'Notebook', preco: 2499, fragil: true },
    { nome : 'iPad Pro', preco: 4199, fragil: true },
    { nome : 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome : 'Copo de Plástico', preco: 18.99, fragil: false }
]

const apenasCaros = p => p.preco >= 500
const apenasFrageis = p => p.fragil // == true <- não precisa do teste, só mostra se é true ou false.

console.log(produtos.filter2(apenasCaros).filter2(apenasFrageis))