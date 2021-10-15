function criarProduto(nome, preco){
    return {
        nome, // Não é necessário inserir as variaveis nos espaços, apenas quando a ordem está distinta
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

/*function criarProduto(id, nome, marca, preco){
    return {
        id: id,
        nome: nome,
        marca: marca,
        preco: preco
    }
}

console.log(criarProduto(this.id, 'Achocolatado', 'Nestlé', 12.50))
console.log(criarProduto(this.id, 'Soda', 'Sprite', 4.50))
console.log(criarProduto(this.id, 'Barra Adocicada', 'Snickers', 2.50))*/