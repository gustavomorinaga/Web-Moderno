const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Como o conteúdo que vamos escrever é JSON, então devemos converter o objeto para JSON.
// Com isso, usamos JSON.stringify(conteúdo) para converter.

// Sintaxe: fs.writeFile(diretório, conteúdo, erro => { callback })
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})