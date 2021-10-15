// FlatMap – Extrair dados independente do nível do objeto (um único array com todos os dados selecionados).

// Escola -> Turmas => Alunos -> Nome, Nota
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))  // <- Resultado que deve ser, com todos os dados num único array.

Array.prototype.flatMap = function(callback) {      // <- É necessário criar o flatMap no sistema para dar esse tipo de resultado.
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)