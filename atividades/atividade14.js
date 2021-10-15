/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que 
possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: 
“Aqui está, são 3 reais o quilo”. Teste com estas três opções .C rie também um default, 
que retornará uma mensagem de erro no console. 
*/

const hort = (fruta) => {
    switch (fruta){
        case 'maçã':
            return `Não vendemos esta fruta aqui.`
        case 'kiwi':
            return `Estamos com escassez de kiwis.`
        case 'melancia':
            return `Aqui está, são 3 reais o quilo.`
        default:
            return `Não temos.`
    }
}

console.log(hort('maçã'))
console.log(hort('kiwi'))
console.log(hort('melancia'))
console.log(hort('chinelo'))