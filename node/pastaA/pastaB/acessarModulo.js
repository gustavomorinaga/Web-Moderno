const moduloA = require('../../moduloA')    // Respeitar as letras maiúsculas e minúsculas do nome do arquivo!
console.log(moduloA.ola)

// HTTP: módulo nativo do Node, pode-se criar um servidor local.
/*
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
*/

// Um módulo possui várias pastas e arquivos, com isso, é interessante possuir um arquivo index.js
// para ser a matriz de todas as dependências desse módulo, parecido com o index.html como página principal.