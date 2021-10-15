// OBS.: Sempre quando der erro, o JS sempre vai procurar o primeiro catch para tratar o problema

const { reject } = require("lodash");
const { resolve } = require("path");

// Pode-se utilizar também o "try" e o "catch"

function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!');
      } else {
        resolve(valor);
      }
    } catch(e) {
      reject(e);
    }
  });
}

funcionarOuNao('Testando...', 0.5)
  .then(valor => console.log(`Valor: ${valor}`))
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('Fim!'));   // Quando a requisição é rejeitada, pode-se adicionar um then depois do
                                      // catch, porém não terá mais o valor que estava sendo tratado.

// Tratando erros dentro do then(), ao invés de catch:

/*
funcionarOuNao('Testando...', 0.5)
  .then(
    valor => consol.lol(`Valor: ${valor}`),   // <- Erro nessa linha pois não existe "consol.lol"
    erro => console.log(`Erro Esp.: ${erro}`)
  )
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('Fim!'));
*/
