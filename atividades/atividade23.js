/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, 
considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" 
se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 
Repita a operação até que o código lido seja negativo.
*/

const calcularMedia = (codigo, n1, n2, n3) => {
    let notas = []
    notas.push(n1), notas.push(n2), notas.push(n3)
    notas.sort((a,b) => a < b ? 1 : -1)

    resultado = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

    return `Código do Aluno: ${codigo}, Notas: ${notas.join(', ')}, Média: ${resultado}, Situação: ${resultado <= 10 && resultado >= 7 ? 'APROVADO' : resultado < 7 && resultado >= 5 ? 'RECUPERAÇÃO' : 'REPROVADO'}`
}

console.log(calcularMedia(123, 2.8, 6, 3.5))
console.log(calcularMedia(626, 7, 6, 5))
console.log(calcularMedia(321, 7, 8, 9))