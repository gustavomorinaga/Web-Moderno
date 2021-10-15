//Expressões de VERDADEIRO ou FALSO

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

/*"!" representa uma negação, "isAtivo" está como 1 (que representa verdadeiro), se for colocado
somente um "!", será FALSO; se for colocado dois "!", será VERDADEIRO
*/
console.log(!!isAtivo)
console.log(!isAtivo)

let nome = ""
console.log(nome || "Desconhecido") //A variável "nome" está vazia (indica como falso), e imprime como "Desconhecido"

nome = "Gustavo"
console.log(nome || "Desconhecido") //A varável está preenchida (indica como verdadeiro)