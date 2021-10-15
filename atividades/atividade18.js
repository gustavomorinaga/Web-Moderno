/*
Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.
*/

const extenso = (numero) => {
    switch (numero){
        case 0:
            return `Zero`
        case 1:
            return `Um`
        case 2:
            return `Dois`
        case 3:
            return `Três`
        case 4:
            return `Quatro`
        case 5:
            return `Cinco`
        case 6:
            return `Seis`
        case 7:
            return `Sete`
        case 8:
            return `Oito`
        case 9:
            return `Nove`
        case 10:
            return `Dez`
        default:
            return `O valor está fora do intervalo.`
    }
}

console.log(extenso(0))
console.log(extenso(1))
console.log(extenso(2))
console.log(extenso(3))
console.log(extenso(4))
console.log(extenso(5))
console.log(extenso(6))
console.log(extenso(7))
console.log(extenso(8))
console.log(extenso(9))
console.log(extenso(10))
console.log(extenso(11))