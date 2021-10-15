// GET (PEGAR) & SET (ATRIBUIR) DADOS

// GET - Usado para evitar que os valores sejam alterados, sendo feita somente a leitura desse valor. 
// SET - Usado para fazer validação dos dados e atribuir valores às variáveis privadas. 

const sequencia = {
    _valor: 1,        // Colocar underline (_) na frente da variável/atributo significa que será privada e acessada
    get valor(){      // internamente para os devs (convenção).
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)