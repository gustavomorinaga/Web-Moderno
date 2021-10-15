// Com promise...

const http = require('http');

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = '';
  
      // 'data' -> As informações coletadas
      res.on('data', dados => {
        resultado += dados;
      });
      
      // 'end' -> Quando tudo terminar
      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch(e) {
          reject(e);
        }
      });
    });
  });
}

let nomes = [];

// all() -> Quando todas as promises forem resolvidas irá executar a cadeia de then e catch

// Com isso, ficaria assim:
// Promise.all([promise1, promise2, promise3]).then(retorno sucesso).catch(retorno falha);
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e.message));

// Testando uma turma inexistente
getTurma('D').catch(e => console.log(e.message));
