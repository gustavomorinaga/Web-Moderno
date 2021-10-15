/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
*/

const lerParesImpares = (vetor) => {
    let qtdPar = 0
    let qtdImpar = 0

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] % 2 == 0){
            qtdPar++
        } else {
            qtdImpar++
        }
    }

    return `Pares: ${qtdPar} \nImpares: ${qtdImpar}`
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(lerParesImpares(vetor))