console.log(module.exports)     // {} – Objeto
console.log(module.exports === this)    // true
console.log(module.exports === exports) // true

// Maneiras de exportar os módulos (ambas pertencem ao module.exports):
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null  // Não adianta mudar o valor de exports, somente acrescentar um objeto (pois é redirecionado ao module.exports)
console.log(module.exports)

// Forma certa de atribuir um novo objeto a ser exportado:
module.exports = { publico: true }
console.log(module.exports)