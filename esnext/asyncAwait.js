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

// Recurso do ES8
// Objetivo de simplificar o uso de promises..

// Async torna a execução síncrona em assíncrona, e o Await faz com que o resultado seja gerado
// quando todas as instruções forem concluídas.

// IMPORTANTE: Await somente funcionará quando tiver Async

let obterAlunos = async () => {
  const turmaA = await getTurma('A');
  const turmaB = await getTurma('B');
  const turmaC = await getTurma('C');

  return [].concat(turmaA, turmaB, turmaC);   // Retorna um objeto do tipo AsyncFunction
}

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes)); 
