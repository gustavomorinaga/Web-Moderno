/*
 Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e 
 tempo de aplicação. Aprimeira função retornará o montante da aplicação financeira sob 
 o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros 
 compostos.
*/

const decimal = (valor) => parseFloat(valor).toFixed(2)
const converterValor = (valor) => valor.toString().replace('.', ',')
const imprimirResultado = (valor) => console.log(`R$ ${valor}`)

const jurosSimples = (capitalInicial, taxa, tempo) => decimal(capitalInicial + (capitalInicial * taxa * tempo))
const jurosCompostos = (capitalInicial, taxa, tempo) => decimal(capitalInicial * (1 + taxa) ** tempo)

imprimirResultado(converterValor(jurosSimples(2000, 0.1, 4)))
imprimirResultado(converterValor(jurosCompostos(2000, 0.1, 4)))