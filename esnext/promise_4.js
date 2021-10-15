// MÉTODO INTERESSANTE PARA PEGAR TODAS AS INFORMAÇÕES NECESSÁRIAS PARA REALIZAR UMA TAREFA

// Exemplo: Coletar todos os dados de cliente (CPF, Endereço, Nome, ...) para realizar uma compra.

function gerarNumeroEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max];
  
  return new Promise(resolve => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator + min);
      resolve(aleatorio);
    }, tempo);
  });
}

// Chamar o then() quando todas e várias promises forem resolvidas:
function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroEntre(1, 60, 4000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 500),
    gerarNumeroEntre(1, 60, 3000),
    gerarNumeroEntre(1, 60, 100),
    gerarNumeroEntre(1, 60, 1500),
  ]);
}

gerarVariosNumeros().then(numeros => console.log(numeros));
