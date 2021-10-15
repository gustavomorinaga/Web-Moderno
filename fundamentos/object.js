const prod1 = {}
prod1.nome = "Moto G6"
prod1.preco = 1600.00
prod1.tipo = "Celular"
prod1["DescontoLegal"] = 0.40 //Evitar atributos com espaço

console.log(prod1)

//Objeto com atributos dentro da declaração
//Os atributos podem ser dividos em aninhamentos

const prod2 = {
    nome: "Violão Giannini",
    preco: 350.50,
    tipo: "Instrumento",
    Componentes: {
        Corda: "MPB Nilon",
        Palheta: {
            Marca: "Woodstock",
            Cor: "Vermelho"
        }
    }
}

console.log(prod2)