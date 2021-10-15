// Sequência de chaves dos produtos (IDs):
const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

// Objeto que vai receber os produtos e seus atributos:
const produtos = {}   

// Função para salvar os produtos:
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id   // <- Caso produto não possui ID, irá receber conforme a sequência.
    produtos[produto.id] = produto              // <- Salvando os produtos no objeto.
    return produto
}

// Função para excluir um produto via ID:
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// Função para pegar o produto por ID:
function getProduto(id) {
    return produtos[id] || {}   // Retorna o produto com o ID, e caso não exista irá retornar um objeto vazio.
}

// Função para retornar todos os produtos:
function getProdutos() {
    return Object.values(produtos)    // <- Retorna somente os valores dos objetos.
}

// Exportando as funções:
module.exports = { salvarProduto, excluirProduto, getProduto, getProdutos }