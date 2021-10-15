// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
// multiplicação e divisão desses valores.

// Função Simples

/*
function Soma(x, y) {
    return x + y
}

function Subt(x, y) {
    return x - y
}

function Divi(x, y) {
    return x / y
}

function Mult(x, y) {
    return x - y
}

//Arrow Function

/*
const Soma = (x, y) => x + y
const Subt = (x, y) => x - y
const Divi = (x, y) => x / y
const Mult = (x, y) => x * y

console.log(Soma(10, 5))
console.log(Subt(10, 5))
console.log(Divi(10, 5))
console.log(Mult(10, 5))
*/

//--------------------------

//Função no Objeto

const operacao = {
    Soma: (x, y) => x + y,
    Subt: (x, y) => x - y,
    Divi: (x, y) => x / y,
    Mult: (x, y) => x * y
}

console.log(operacao.Soma(10, 5))
console.log(operacao.Subt(10, 5))
console.log(operacao.Divi(10, 5))
console.log(operacao.Mult(10, 5))