const pessoa = {     // Objeto é um conjunto de chaves e valores.
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))    // Object.keys é uma função que pega todas as chaves do objeto
console.log(Object.values(pessoa))  // Object.values é uma função que pega todas os valores do objeto
console.log(Object.entries(pessoa)) // Object.values é uma função de todas as entradas, retornando uma array com sub-arrays com chaves e valores.

Object.entries(pessoa).forEach(e => {    // Pode ser utilizada para fazer uma função para cada elemento dessa array
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {    // Outro modo com Destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {     // Define as propriedades do objeto, a qual objeto a ser afetado e nome da nova chave.
    enumerable: true,                                 // Enumerable: define se a chave pode ser visível ou não nas outras funções Object.
    writable: false,                                  // Writable: define se pode ser escrita ou não.
    value: '01/01/2019'                               // Value: valor da nova propriedade.
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
// Atribui chaves e valores de múltiplos objetos para um único objeto

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }     // a variável 'a' já foi declarada anteriormente, então será atribuida a novo valor de 'a'

const obj = Object.assign(dest, o1, o2)
console.log(obj)

// Object.freeze congela o objeto, onde não é possível fazer alterações e atribuições nele. 

Object.freeze(obj)
obj.c = 1234
console.log(obj)