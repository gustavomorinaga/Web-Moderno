// Object.preventExtensions: previne que sejam adicionados atributos no objeto.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))    // Verificando se pode adicionar atributos no objeto produto.

produto.nome = 'Borracha'   // Pode-se alterar valores do atributo.
produto.descricao = 'Borracha escolar branca'   // Não pode ser adicionados atributos no objeto.
delete produto.tag  // Pode-se excluir atributos.
console.log(produto)

// Object.seal: Selagem do objeto, sendo impossível adicionar e deletar atributos no objeto, porém pode-se alterar os valores.

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Verificando se o objeto está selado.

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze: impossível de adicionar, alterar e deletar atributos.

const carro = { modelo: 'F40', velMax: 200 }
Object.freeze(carro)
delete carro.velMax
carro.modelo = 'A40'
console.log(carro)