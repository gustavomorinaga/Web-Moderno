// Faça um algoritmo que calcule o fatorial de um número.

const fatorial = (valor) =>{
    if (valor == 1){
        return 1
    } else {
        return valor * fatorial(valor - 1)
    }
}

/*
const fatorial = (valor) => {
    let resultado = 1

    for (let i = valor; i >= 1; i--){
        resultado *= i
    }

    return resultado
}*/

console.log(fatorial(5))  // 120
console.log(fatorial(10)) // 3628800