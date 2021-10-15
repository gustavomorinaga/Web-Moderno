// Object.create cria um novo objeto, utilizando um outro objecto existente como protótipo para o novo objeto a ser criado.

const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)   // filha1 recebendo dados do objeto pai
filha1.nome = 'Ana'     // Recebendo uma alteração de seu nome
console.log(filha1.corCabelo)   // Portanto, tem o mesmo tipo de cabelo

// Na filha2, herdará dados de seu pai e terá nome impossível de ser alterado, 
// e poderá ser listado no console.

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'   // Tentando alterar o nome da filha2
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Como percorrer os atributos de um objeto:

for (let key in filha2) {   // key: chave/atributo
    filha2.hasOwnProperty(key) ?    // hasOwnProperty é caso o atributo pertence aquele objeto
        console.log(key) : console.log(`Por herança: ${key}`)
}