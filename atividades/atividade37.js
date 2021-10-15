/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam 
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos, 
bem como a soma dos elementos.
*/

const aritmetica = (n, a1, r) => {
    let soma = 0
    for (let i = 0; i < n; i++){
        soma += a1 + r * i
        console.log(soma)
    }

    console.log(`-------------`)
    console.log(`Soma: ${soma}`)
    console.log(`-------------`)
}

const geometrica = (n, a1, r) => {
    for (let i = 0; i < n; i++){
        console.log(a1 * (r ** i))
    }

    console.log(`-------------`)
    console.log(`Soma: ${a1 * ((r ** n) - 1) / (r - 1)}`)
    console.log(`-------------`)
}

//aritmetica(20, 2, 2)
aritmetica(10, 10, 15)
geometrica(10, 5, 3)