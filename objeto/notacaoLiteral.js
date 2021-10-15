// COLOCANDO VARIÁVEIS NUM OBJETO

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }  // Versão Tradicional
const obj2 = { a, b, c }           // Versão Atualizada
console.log(obj1, obj2)

// ATRIBUINDO NOME DO ATRIBUTO E VALOR NO OBJETO

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr            // Versão Tradicional
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}  // Versão Atualizada
console.log(obj4)

// FUNÇÕES NOS OBJETOS

const obj5 = {
    funcao1: function(){  // Versão Tradicional
        //...
    },
    funcao2(){            // Versão Atualizada
        //...
    }
}

console.log(obj5)