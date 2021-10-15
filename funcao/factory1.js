// Factory simples:

/*function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())*/

//------------------------------------------------

const comunidade = []

//Função Normal

/*function Pessoa(nome, sobrenome, idade, sexo){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        sexo: sexo
    }
}*/

//Arrow Function

const pessoa = (nome, sobrenome, idade, sexo) => {
    return {
        nome,
        sobrenome,
        idade,
        sexo
    }
}

comunidade.push(pessoa('Gustavo Matheus', 'Morinaga Cardoso', 19, 'Masculino'))
comunidade.push(pessoa('Angélica Ayumi', 'Morinaga Cardoso', 13, 'Feminino'))
comunidade.push(pessoa('Carmem Silvia', 'Morinaga Cardoso', 51, 'Feminino'))
comunidade.forEach(comunidade => console.log(comunidade))