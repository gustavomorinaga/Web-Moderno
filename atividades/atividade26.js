/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

const encontrarParesImpares = (op, comeco, fim) => {
    switch (op){
        case 'impar':
            for (let i = comeco; i <= fim; i++){
                if (i % 2 != 0){
                    console.log(i)
                }
            }
            break
        case 'par':
            for (let i = comeco; i <= fim; i++){
                if (i % 2 == 0){
                    console.log(i)
                }
            }
            break
        default:
            return console.log(`Operação incorreta.`)
    }
}

encontrarParesImpares('par', 1, 100)
//encontrarParesImpares('impar', 1, 100)
//encontrarParesImpares('a', 1, 10)