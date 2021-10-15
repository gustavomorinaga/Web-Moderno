// JSON é um formato de dados (textual), portanto, não irá ler funções num objeto.

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

// Conversão de objeto para JSON:
console.log(JSON.stringify(obj))

// Conversão de JSON para objeto:

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))  – Método errado
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))  – Método errado
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))   // Os atributos no JSON são delimitados por aspas duplas.

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))