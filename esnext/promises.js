// PROMISES -> É uma estrutura que representa uma operação assíncrona, retornando uma requisição com sucesso ou
// rejeitado (importante para tratamento de erros de requisição)

/*
  Promise(resolve, reject) {
    ...código
    resolve(variável);
  }

  .then();  <- Caso seja um sucesso
  .catch(); <- Caso seja rejeitado
*/

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat('?!?!'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e));
