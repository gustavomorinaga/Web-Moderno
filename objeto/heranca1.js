// Object.prototype: serve para acessar o protótipo das funções
// objeto.__proto__: serve para acessar o protótipo dos objetos

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)  // Protótipo do objeto "Ferrari", que vai retornar um objeto vazio mas que existe.
console.log(ferrari.__proto__ === Object.prototype)   // Object.prototype é o objeto de maior nível da herança.
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === volvo.__proto__)  // Ferrari e Volvo possuem o mesmo tipo de prototype.
console.log(Object.prototype.__proto__)     // Como Object.prototype é de maior nível, não existe protótipo acima dele.
console.log(Object.prototype.__proto__ === null)

function MeuObj() {}
console.log(typeof Object, typeof MeuObj)
console.log(Object.prototype, MeuObj.prototype)