// map: serve para transformar os dados de uma array e gera uma nova array de mesmo tamanho.

const nums = [1, 2, 3, 4, 5]

// For com propósito, transformando os dados.
let resultado = nums.map(elemento => {
    return elemento * 5
})

console.log(resultado)

// Pode-se executar várias vezes o map na mesma linha (em cadeia).

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)