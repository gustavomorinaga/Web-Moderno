const valores = [7.7, 8.9, 6.3, 9.2] //Armazena valores em um VETOR

console.log(valores[2])

valores[4] = "ETEC"
console.log(valores)
console.log(valores.length) //Quantidade de valores no vetor

//IMPORTANTE: Criar Arrays de tipos de dados separados

valores.push({id: 5}, false, null, "teste")
console.log(valores)

console.log(valores.pop()) //Retira o último valor do vetor
delete valores[5] //Exclui o valor selecionado
console.log(valores)