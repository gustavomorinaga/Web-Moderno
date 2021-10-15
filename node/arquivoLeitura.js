// File System (fs): módulo nativo do Node, para fazer leitura e escrita de arquivos no projeto (server-side).

const fs = require('fs')

const caminho = __dirname + '/arquivo.json'     // __dirname: diretório do arquivo a ser lido/escrito.
// Sintaxe: variável = __dirname + '/diretório'

// FORMA SÍNCRONA: Caso tenha algum arquivo grande a ser trabalhado, irá demorar para que outro processo entre na fila (NÃO RECOMENDADO).

// Leitura de forma síncrona:
const conteudo = fs.readFileSync(caminho, 'utf-8')  // fs.readFileSync(conteudo, encode) – Ler de forma síncrona.
console.log(conteudo)

// FORMA ASSÍNCRONA: As tarefas são passadas para um espaço a ser trabalhado e, quando terminado o processo,
// irá retornar o resultado e dará espaço na fila para a próxima tarefa.

// Sintaxe: fs.readFile(caminho, encode, (erro, conteudo) => { ... })
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// A leitura do JSON não precisa do módulo fs, basta requisitar igualmente como os arquivos .js
const config = require('./arquivo.json')    // <- É necessário colocar extensão caso não seja .js
console.log(config.db)

// Leitura de uma pasta:
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})