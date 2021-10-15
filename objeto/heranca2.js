// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'Z'    // Object.prototype é o maior nível da herança, onde podemos colocar atributos globais.
                                // ATENÇÃO: Não é recomendado esse tipo de manipulação, deve ser feito com cuidado.

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'D' } // Para fazer a herança, basta referenciar o __proto__ para o objeto acima.
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)    // O filho e o pai não possuem o atributo attr1, mas o avô possui.
console.log(filho.attr2)    // O filho não possui o atributo attr2, mas o pai possui.
console.log(filho.attr4)    // O filho, o pai e o avô não possuem o atributo attr4, nem mesmo o Object.prototype.

console.log(filho.attr0)    // O filho, o pai e o avô não possuem o atributo attr0, mas existe no Object.prototype.

console.log(filho.attr3)    // O filho e o pai possuem o mesmo atributo attr3, mas o filho causa 'sombreamento'
                            // no atributo do pai pois achou no mesmo lugar o atributo.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324     // Shadowing: sombreamento dos atributos de outro objeto herdado
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`  // O 'super' irá pegar a mesma função no protótipo base.
    }
}

Object.setPrototypeOf(ferrari, carro)   // Definindo a ligação de prototipagem entre ferrari e carro, 
                                        // semelhante a __proto__.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)    // Os atributos que realmente são do objeto 'ferrari' serão mostrados, mas aqueles que são 
console.log(volvo)      // do protótipo 'carro' não. Porém, os atributos do protótipo podem ser acessados.

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())