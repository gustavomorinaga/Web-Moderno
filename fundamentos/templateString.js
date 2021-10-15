//Concatenação com várias linhas:

const nome = "Gustavo" //Variável
const concatenacao = "Olá " + nome + "!" //Frase a concatenar
const template = `
    Olá
    ${nome}!`

    //Frase concatenada em quebras de linhas
console.log(concatenacao, template)

console.log(`2 + 2 = ${2 + 2}`) //Texto com o interpretador de soma (com resultado CORRETO como teste)
console.log(`5 + 5 = ${10 + 5}`) //Texto com o interpretador de soma (com resultado INCORRETO como teste)

const up = texto => texto.toUpperCase() //Conversor de texto em MAIÚSCULO
console.log(`Ah... ${up("what a fuck")}!`) //Texto com conjunto em MAIÚSCULO

const down = texto => texto.toLowerCase() //Conversor de texto em MINÚSCULO
console.log(`AAAAAHH... ${down("TUM")}.`) //Texto com conjunto em MINÚSCULO