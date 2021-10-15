/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o 
mínimo de cédulas para um determinado valor informado pelo usuário considerando 
notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as 
notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas 
a seguinte informação (note que não foram exibidas informações sobre as demais cédulas):
1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1
*/

const saque = (valorSaque) => {
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let contador5 = 0
    let contador2 = 0
    let contador1 = 0

    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        switch (valorNota){
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 20:
                valorSaque -= 20
                contador20++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 2:
                valorSaque -= 2
                contador2++
                break
            case 1:
                valorSaque -= 1
                contador1++
                break
            default:
                return `Erro.`
        }

        valorNota = calcularValorNota(valorSaque)
    }

    return elaborarResultado(contador100, contador50, contador20, contador10, contador5, contador2, contador1)
}

const calcularValorNota = (valorSaque) => {
    if (valorSaque >= 100){
        return 100
    } else if (valorSaque >= 50){
        return 50
    } else if (valorSaque >= 20){
        return 20
    } else if (valorSaque >= 10){
        return 10
    } else if (valorSaque >= 5){
        return 5
    } else if (valorSaque >= 2){
        return 2
    } else if (valorSaque >= 1){
        return 1
    }
}

const elaborarResultado = (contador100, contador50, contador20, contador10, contador5, contador2, contador1) => {
    let resultado = ''

    if (contador100 > 0){
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0){
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador20 > 0){
        resultado += `${contador20} nota(s) de R$ 20. `
    }

    if (contador10 > 0){
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0){
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador2 > 0){
        resultado += `${contador2} nota(s) de R$ 2. `
    }

    if (contador1 > 0){
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(saque(153))
console.log(saque(182))
console.log(saque(549))
console.log(saque(26))