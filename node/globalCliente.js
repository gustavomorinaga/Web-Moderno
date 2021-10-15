require('./global')

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita!'     // Objetos que estão visíveis globalmente podem ser alteradas, gerando possíveis erros.
console.log(minhaApp.nome)

// RECOMENDADO UTILIZAR SISTEMA DE MÓDULOS!