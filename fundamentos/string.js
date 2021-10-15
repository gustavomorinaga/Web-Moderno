const escola = "ETEC São Roque"

console.log(escola.charAt(3)) //Procura o caractere inserido
console.log(escola.charAt(14)) //Procura, poém não existe o caractere 14

console.log(escola.charCodeAt(5)) //Procura o valor selecionado na tabela ASCII
console.log(escola.indexOf("S")) //Procura a posição do caractere selecionado na variável
console.log(escola.substring(5)) //Pega o caractere que está na posição 5

console.log("Escola ".concat(escola)) //Concatena o texto na variável
console.log("Escola " + escola + "!") //Igual ao anterior, concatena

console.log(escola.replace("ETEC", "FATEC")) //Substitui o valor por outro
console.log(escola.replace(/\w/g, "E")) //Substitui todos os valores por "E" (Regex)

console.log("Gustavo, Marcelo, Pinheiro".split(",")) //Array: separa os valores por algum valor, no caso ","