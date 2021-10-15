class Avo {
    constructor(sobrenome) {
        this.sobrenome  = sobrenome
    }
}

class Pai extends Avo {     // extends: a classe/função irá extender do protótipo selecionado.
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)    // super: pega o construtor selecionado para montar o molde, pois o Pai possui o sobrenome do Avo.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)