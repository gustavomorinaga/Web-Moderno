/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) 
e quantos deles estão fora do intervalo, escrevendo estas informações.
*/

const observarIntervalo = (vetor) => {
    let qtdNumerosDentro = 0
    let qtdNumerosFora = 0
    
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosDentro++
        } else {
            qtdNumerosFora++
        }
    }

    return `Dentro do intervalo: ${qtdNumerosDentro} \nFora do intervalo: ${qtdNumerosFora}`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))