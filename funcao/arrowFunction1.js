//Variável recebendo uma função básica:

let dobro = function (a) {
    return 2 * a;
}

//Variável recebendo uma função arrow com bloco de código com
//múltiplas tarefas:

dobro = (a) => {
    return 2 * a;
}

//Variável recebendo uma função arrow com um único parâmetro
//e com uma única tarefa (return implícito):

dobro = a => 2 * a;

console.log(dobro(Math.PI));


let ola = function(){
    return 'Olá';
}

ola = () => 'Olá'; //Função sem parâmetros.

ola = _ => 'Olá'; //O underline indica que há sim um parêmetro.

console.log(ola());