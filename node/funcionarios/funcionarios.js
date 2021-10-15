// Desafio: pegar uma funcionária chinesa com o menor salário.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')  // axios: faz requisições para obter dados de um arquivo que está remoto (servidor).

const mulher = f => f.genero == "F"
const chines = f => f.pais == "China"
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

// get: obtém uma informação da url fornecida.
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios   // Pode-se quebrar linhas para visualizar melhor as funções.
        .filter(mulher)
        .filter(chines)
        .reduce(menorSalario)
    
    console.log(func)
})

// Para instalar as dependências do projeto, deve-se defini-las no package.json e digitar no terminal: npm i
// No repositório GitHub não precisa do node_modules, sendo preciso criar um arquivo .gitingnore para não incluir essa pasta.

// Para começar um script do projeto no package.json, basta dar: npm script_escolhido
// Caso seja um script que não seja nativo do npm, digite: npm run script_escolhido