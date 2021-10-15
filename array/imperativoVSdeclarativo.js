const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
    { nome: 'Pedro', nota: 8.7 }
]

// FORMA IMPERATIVA – Pouca reutilização das funções, fazendo todos os passos num único bloco.
// "Como deve ser feito (detalhes)".
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// FORMA DECLARATIVA – Recomendada para separar as funções e fazer a reutilização delas no código.
// "O quê deve ser feito (objetivo)".
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)