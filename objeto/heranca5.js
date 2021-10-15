// TODA FUNÇÃO POSSUI .prototype

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {    // Adicionando uma função 'reverse' na função String
    return this.split('').reverse().join('')
}

// .split(): divide uma string em um array com separação entre eles.
// .reverse(): reverte uma string.
// .join(): junta o array numa string.

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {   // Adicionando uma função 'first' para a função Array.
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {   // Adicionando uma função 'toString' já existente na função String.
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())

// NUNCA SOBRESCREVER UMA FUNÇÃO JÁ EXISTENTE NAS FUNÇÕES DO SISTEMA,
// PORÉM PODEM SER ADICIONADAS FUNÇÕES NOVAS COM CUIDADO.