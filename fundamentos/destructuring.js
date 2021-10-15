//Destruralização de um objeto JSON:

const pessoa = {
    nome: 'Gustavo Matheus',
    idade: 18,
    genero: 'M',
    endereco: {
        rua: 'Rua dos Lírios',
        bairro: 'Jardim São José',
        numero: 116
    },
    data_nasc: '27/10/2000'
}

//Desestruturação do objeto 'pessoa' para extrair determinadas informações dela:

const { nome, idade, endereco } = pessoa;
console.log(nome, idade, endereco);

//Desestruturação de uma informação dentro desta objeto:

const {endereco: {numero}} = pessoa;
console.log(numero);

//Desestruturação da mesmo objeto só que atribuindo os valores extraídos em variáveis novas:

const {nome: n, idade: i, endereco: e} = pessoa;
console.log(n, i, e);