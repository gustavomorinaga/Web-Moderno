//Armazenando um função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(5, 10)

//Armazenando uma função arrow em uma variável

const imprimirMult = (a, b) => {
    return a * b
}

console.log(imprimirMult(5, 10))

//Retorno implícito

const imprimirDiv = (a, b) => a / b

console.log(imprimirDiv(10, 2))

const mostrar = a => console.log(a)

console.log("Hello World!")