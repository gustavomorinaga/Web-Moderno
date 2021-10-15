//Classe

class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

//Função Construtora

function pessoa(nome){
    this.nome = nome

    this.falar = function(){
        return console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new pessoa('Maria')
p2.falar()
console.log(p2.nome)