//COMO DRIBLAR OS ERROS DE ENCONTROS DO THIS
//Possibilidade 1:

function Pessoa(){
    this.idade = 0;

    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000); //A cada 1000 milisegundos representa 1 segundo.
}

new Pessoa;

//Possibilidade 2:

function Pessoa(){
    this.idade = 0;

    const self = this; //Armazena a referência de this, que aponta para a Pessoa.
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }.bind(this), 1000);
}

new Pessoa;