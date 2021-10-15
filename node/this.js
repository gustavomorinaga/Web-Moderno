console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// No módulo, this aponta para o module.exports.

function logThis() {
    console.log('Dentro de uma função...')  // Porém dentro de uma função, o this aponta para o global.
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()