/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e 
somente se o valor do elemento for maior que 5.
*/

let vetor = [1, 2, 3, 4, 5]

/*
const mult = (vetor, n) => {
    let resultado = []
    for (let i = 0; i < vetor.length; i++){
        resultado.push(vetor[i] * n)
    }

    return resultado
}*/

const mult = (vetor, n) =>{
    let resultado = []

    vetor.forEach(i => {
        resultado.push(i * n)
    })

    return resultado
}

console.log(mult(vetor, 3))