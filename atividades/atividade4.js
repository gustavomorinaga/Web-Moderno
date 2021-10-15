// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
// e o resto da divisão destes dois valores.

/*
function divisão(dividendo, divisor){
    return console.log(`Conta: ${dividendo}/${divisor}`, `Resultado: ${dividendo / divisor}`, `Resto: ${dividendo % divisor}`)
}*/

/*
const divisão = function (dividendo, divisor){
    return console.log(`Conta: ${dividendo}/${divisor}`, `Resultado: ${dividendo / divisor}`, `Resto: ${dividendo % divisor}`)
}*/

const divisão = (dividendo, divisor) => console.log(`Conta: ${dividendo}/${divisor}`, `Resultado: ${dividendo / divisor}`, `Resto: ${dividendo % divisor}`)

divisão(10, 5)
divisão(12, 5)
divisão(40, 3)