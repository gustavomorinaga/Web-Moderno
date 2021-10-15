const pessoa = {
    saudacao: "Bom dia!",
    falar() { //Pode-se colocar função em objeto JavaScript.
        console.log(this.saudacao); //This está apontando para o objeto pessoa.
    }
}

pessoa.falar();
const falar = pessoa.falar
falar(); //Conflito entre paradigmas: funcional e CO

const falarDePessoa = pessoa.falar.bind(pessoa); //Bind resolve o contexto do this, que no caso é do objeto 'pessoa'.
falarDePessoa();