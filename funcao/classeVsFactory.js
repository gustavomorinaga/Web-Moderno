//Desvantagem da Classe é não poder identificar a variável no contexto que foi definido marcado como 'this'.
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

//Vantagem do Factory é ter ciência onde a variável foi declarada no contexto léxico, podendo acessar globalmente.

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()