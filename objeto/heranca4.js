function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto  // obj1 vai herdar da função MeuObjeto
const obj2 = new MeuObjeto  // obj2 vai herdar da função MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)  // Como herdaram do mesmo pai, são estritamente iguais. 
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype    // obj3 deixará de ter como prototipagem o Object.prototype para MeuObjeto.prototype.
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo:

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// MeuObjeto -> MeuObjeto.prototype, Function.prototype
// MeuObjeto.prototype -> Atributos, Object.prototype
// Function.prototype -> Object.prototype