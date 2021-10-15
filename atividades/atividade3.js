// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

/*
function Expo(base, expoente){
    return base ** expoente
}*/

/*
const Expo = function (base, expoente){
    return base ** expoente
}*/

//const Expo = (base, expoente) => Math.pow(base, expoente)

const Expo = (base, expoente) => base ** expoente // ES 2016

console.log(Expo(2,5))
console.log(Expo(5,2))
console.log(Expo(10,2))