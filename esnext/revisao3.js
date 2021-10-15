// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }

console.log(Object.keys(obj));  // Chaves
console.log(Object.values(obj));  // Valores
console.log(Object.entries(obj)); // Chaves e Valores

// Melhorias de Notação Literal
const nome = 'Carla';

const pessoa = {
  // Versão antiga:

  // nome: nome,
  // ola: function() {
  //   return 'Oi gente!';
  // }

  // Versão nova:

  nome,
  ola() {
    return 'Olá gente!';
  }
}

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal {};
class Cachorro extends Animal {
  falar() {
    return 'Au au!';
  }
}

console.log(new Cachorro().falar());
