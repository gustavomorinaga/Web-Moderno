/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. 
O programa recebe como parâmetros dois valores numéricos e uma string referente à operação
e a realize com os valores numéricos na ordem que foram inseridos. 
Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  
Crie um caso default para operações inválidas.
*/

const calculadora = (n1, operacao, n2) => {
    switch (operacao){
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return 'Operação Inválida.'
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, 'b', 3))