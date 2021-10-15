const fs = require('fs');
// const path = require('path');

function leitura(caminhoArquivo) { 
  return new Promise(resolve => {
    fs.readFile(caminhoArquivo, 'utf-8', (err, conteudo) => {
      resolve(conteudo.toString());
    });
  });
};

// const caminho = path.join(__dirname, 'dados.txt');
const caminho = __dirname + '/dados.txt';

leitura(caminho).then(res => console.log(res));
