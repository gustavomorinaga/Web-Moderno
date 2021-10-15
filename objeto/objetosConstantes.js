// pessoa -> 123 -> {...}
// Não é atribuído valor de PESSOA, mas sim em seus atributos.
// Constante é o objeto e não aos seus parâmetros (que podem ser alterados). 

const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}

//pessoa = { nome: 'Ana'}       <- O objeto já foi declarado anteriormente, ocasionando erro! 

Object.freeze(pessoa)  // A função "Object.freeze" congela os objetos, ou seja, não podem serem alterados os valores contidas nele.

pessoa.nome = 'Maria'   // Não dá para adicionar, alterar ou excluir atributos do objeto.
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})  // Criando objeto constante por natureza
pessoaConstante.nome = 'Maria'  // Não dá para alterar...

console.log(pessoaConstante)