// Como importar módulos:
const moduloA = require('./moduloA')    // './' referencia o módulo que está dentro do sistema do projeto (caminho relativo).
const moduloB = require('./moduloB')    // Não precisa colocar a extensão .js nos arquivos pois por padrão estamos trabalhando com JS.

// Mostrando o Módulo A:
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

// Mostrando o Módulo B:
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)