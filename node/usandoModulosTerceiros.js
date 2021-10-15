// Importando módulos de terceiros:
// (Para fazer os testes, é necessário instalar a biblioteca do módulo através do NPM no cmd)
// Sintaxe no CMD: npm i modulo
// Caso queira que instale globalmente: npm i -g modulo

// Foi instalado o módulo global 'NODEMON', que ajuda a executar um arquivo JS fazendo alterações e atualizações em tempo real.
// Sintaxe do NODEMON: nodemon arquivo.js


const _ = require('lodash')
setInterval(() => console.log(_.random(500, 600)), 1000)