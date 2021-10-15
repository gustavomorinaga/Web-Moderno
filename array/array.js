// Array é um objeto, mas diferente do Object que possui atributos, seus dados são indexados começando por 0.

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')   // Forma não recomendada para declarar array.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']    // Notação literal recomendada.

console.log(aprovados[0])   // Mostra o dado que está na indexação 0.
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])   // Não existe um dado guardado na indexação 3.

aprovados[3] = 'Paulo'  // Notação utilizada para substituir valor existente.
aprovados.push('Abia')  // Notação utilizada para adicionar novos elementos.
console.log(aprovados.length)

aprovados[9] = 'Rafael'     // Indexações a partir do 3 não possuem dados (serão undefined), mas existem no array até o 9.
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort()    // sort: função para gerar uma nova array organizada.
console.log(aprovados)

delete aprovados[1]     // Excluindo um valor na array, substituindo por undefined.
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')      // Serve para adicionar e remover um valor na índice. Sintaxe: .splice(começo, quantidade_de_itens_para_deletar, novos_elementos)
console.log(aprovados)