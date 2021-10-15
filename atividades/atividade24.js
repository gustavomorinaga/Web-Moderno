/*
Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
*/

/*
function imprimir(){
    let i = 0
    while (i <= 10){
        console.log('Hello World!')
        i++
    }
}

imprimir()
*/

const imprimir = (qtd) => {
    let i = 1
    while (i <= qtd) {
        console.log(`Hello World! - ${i}`) // Colocando contador pra verificar a quantidade.
        i++
    }
}

imprimir(11)