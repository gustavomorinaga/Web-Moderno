//Neste caso, o arrow function fixa o this da função Pessoa.

function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa;