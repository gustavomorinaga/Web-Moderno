// Escopo global do browser: window
// Escopo global do Node: global

// console.log(global)  <- Informações do escopo global do Node

// TOMAR CUIDADO EM MEXER NUM OBJETO COMPARTILHADO NO GLOBAL, OCORRERÁ VÁRIOS PROBLEMAS.
global.minhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}

// Colocado um objeto no global, qualquer arquivo do sistema tem acesso a ele.