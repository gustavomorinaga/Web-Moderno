const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()  // <- Invocando a função factory.
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)   // Ambos contadores compartilham do mesmo objeto, uma altera a outra.

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)   // Como possuem função factory, são objetos diferentes.