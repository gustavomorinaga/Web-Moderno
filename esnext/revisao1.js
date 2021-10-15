// var e let
{
  var a = 2;
  var b = 3;
  console.log(b);
}

console.log(a);

// Template String
const produto = 'iPad';
console.log(`${produto} é caro!`);

// Destructuring
const [l, e, ...tras] = 'Cod3r';  // Desestruturando uma String
console.log(l, e, tras);

const [x, , y, ...z] = [1, 2, 3, 4, 5]; // Desestruturando um Array
console.log(x, y, ...z);

const { idade: i, nome } = { nome: 'Gustavo', idade: 20 }; // Desestruturando um Objeto
console.log(i, nome);
