const porta = 3003  // <- Indicar a porta onde ocorrerá os processos de conexão na rede.

const express = require('express')  // Importando o Express.JS
const bodyParser = require('body-parser')   // Conversor de corpo das requisições.
const app = express()   // Aplicativo para iniciar as execuções no servidor.
const bancoDeDados = require('./bancoDeDados')  // Importando o banco de dados.

/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})
*/

// O formato URL ENCODED diz respeito no envio de dados e requisições via URL.

// .use: aplica em todas as requisições.
app.use(bodyParser.urlencoded({ extended: true }))  // IMPORTANTE: essa linha de código faz a conversão necessária para o envio de dados.

// .get: pega informações.
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Automaticamente, o send enviará os dados por meio de JSON (embora seja objeto).
})

// '/produtos/:id' <- :id é um parâmetro de url.
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))   // req.params.id <- as chaves são requisições, e na URL possui o parâmetro de ID (:ID).
})

// .post: salvar os dados.
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,        // <- req.body.parâmetro: corpo da requisição para atribuir os dados.
        preco: req.body.preco
    })
    res.send(produto)               // <- .send: envia os dados do objeto em formato JSON.
})

// .put: atualiza os dados de um objeto no banco.
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,          // <- Atualiza dados via ID (req.params.id)
        nome: req.body.nome,        // <- req.body.parâmetro: corpo da requisição para atribuir os dados.
        preco: req.body.preco
    })
    res.send(produto)               // <- .send: envia os dados do objeto em formato JSON.
})

// .delete: exclui dados de um objeto no banco.
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

// Colocar o aplicativo para ser transmitido na porta, com uma mensagem dessa porta.
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})