/*
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, 
de acordo com a tabela abaixo: 

Plano | Aumento

A     |    10%
B     |    15%
C     |    20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário 
e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default 
que indique que o plano é inválido.
*/

const aumento = (plano, salarioAtual) => {
    switch (plano){

        // 100% + 20% = 120% ou 1 + 0.1 = 1.1

        case 'A':
            return `R$ ${Math.floor(salarioAtual * 1.1).toFixed(2)}`
        case 'B':
            return `R$ ${Math.floor(salarioAtual * 1.15).toFixed(2)}`
        case 'C':
            return `R$ ${Math.floor(salarioAtual * 1.2).toFixed(2)}`
        default:
            return `O plano é inválido.`
    }
}

console.log(aumento('A', 1000))
console.log(aumento('B', 1000))
console.log(aumento('C', 1000))
console.log(aumento('D', 1000))