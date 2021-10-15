// Objeto: coleção dinâmica de pares chave/valor

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {  // Objeto
    modelo: 'A4',
    valor: 89000,
    proprietario: {  // Objeto
        nome: 'Raul',
        idade: 56,
        endereco: {   // Objeto
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{   // Array com Objetos
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {   // Função
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)