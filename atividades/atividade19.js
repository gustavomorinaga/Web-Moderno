/*
Implemente uma função que receba como parâmetros o código do item pedido, 
a quantidade e calcule o valor a ser pago por aquele lanche. 
Considere que a cada execução somente será calculado um item. 
Use o comando switch. Crie um caso default para produto não existente.
*/

const cardapio = (codigo, qtd) => {
    switch (codigo){
        case 100:
            return `R$ ${Math.floor(3 * qtd).toFixed(2)}`
        case 200:
            return `R$ ${Math.floor(4 * qtd).toFixed(2)}`
        case 300:
            return `R$ ${Math.floor(5.5).toFixed(2)}`
        case 400:
            return `R$ ${Math.floor(7.5).toFixed(2)}`
        case 500:
            return `R$ ${Math.floor(3.5).toFixed(2)}`
        case 600:
            return `R$ ${Math.floor(2.8).toFixed(2)}`
        default:
            return `Produto inexistente.`
    }
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(700, 2))