const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()   // pop: remove o último elemento da array.
console.log(pilotos)

pilotos.push('Verstappen')  // push: adiciona um novo elemento no final da array.
console.log(pilotos)

pilotos.shift()     // shift: remove o primeiro elemento da array.
console.log(pilotos)

pilotos.unshift('Hamilton')     // unshift: adiciona um novo elemento no começo da array.
console.log(pilotos)

// splice: adicionar e remover elementos a partir de uma índice.

// -- adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// -- remover:
pilotos.splice(3, 1)
console.log(pilotos)

// slice: pega um pedaço de uma array e gera uma nova array.

const algunsPilotos1 = pilotos.slice(2)  // Um pedaço começando num índice.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // Um pedaço com começo e fim (não conta o final).
console.log(algunsPilotos2)