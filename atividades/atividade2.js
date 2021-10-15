/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. 
Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes. 
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

/*
function getTriangulo(a = 0, b = 0, c = 0) {
    if ((a === 0) && (b === 0) && (c === 0)){
        return console.log('Não possui um triângulo')
    } else if ((a == b) && (b == c) && (c == a)){
        return console.log('O triângulo é EQUILÁTERO.')
    } else if ((a !== b) && (b !== c) && (c !== a)){
        return console.log('O triângulo é ESCALENO.')
    } else if (((a !== b) && (b == c) && (c !== a)) || ((a !== b) && (b !== c) && (c == a)) || ((a == b) && (b !== c) && (c !== a))) {
        return console.log('O triângulo é ISÓSCELES.')
    }
}
*/

//Arrow Function

/*
const getTriangulo = (a = 0, b = 0, c = 0) => {
    if ((a === 0) && (b === 0) && (c === 0)){
        return console.log('Não possui um triângulo')
    } else if ((a == b) && (b == c) && (c == a)){
        return console.log('O triângulo é EQUILÁTERO.')
    } else if ((a !== b) && (b !== c) && (c !== a)){
        return console.log('O triângulo é ESCALENO.')
    } else if (((a !== b) && (b == c) && (c !== a)) || ((a !== b) && (b !== c) && (c == a)) || ((a == b) && (b !== c) && (c !== a))) {
        return console.log('O triângulo é ISÓSCELES.')
    }
}
*/

//Função usando Ternários

const getTriangulo = (a = 0, b = 0, c = 0) => a == 0 && b == 0 && c == 0 ? 'Não possui um triângulo' : a == b && b == c && c == a ? 'EQUILÁTERO' : ((a !== b) && (b == c) && (c !== a)) || ((a !== b) && (b !== c) && (c == a)) || ((a == b) && (b !== c) && (c !== a)) ? 'ISÓSCELES' : 'ESCALENO'
const imprimir = (valor) => console.log(valor)

imprimir(getTriangulo(10, 10, 10))
imprimir(getTriangulo(5, 7, 10))
imprimir(getTriangulo(5, 10, 10))
imprimir(getTriangulo(10, 5, 10))
imprimir(getTriangulo(10, 10, 5))
imprimir(getTriangulo())