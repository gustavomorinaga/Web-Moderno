// Forma de exportar módulos – mais comum e recomendada:
module.exports = {
    bomDia: 'Bom Dia!',
    boaNoite() {
        return 'Boa Noite!'
    }
}

// SOMENTE O QUE ESTÁ DENTRO DA EXPORTAÇÃO SERÁ VISÍVEL NOS OUTROS ARQUIVOS DO PROJETO.