// MAP: set/get/has (possibilita que as chaves possam ser de tipos diferentes – função, objeto, string...)

// set    -> Insere novos elementos
// get    -> Pega os elementos
// has    -> Verifica se contém o elemento
// delete -> Exclui o elemento
// size   -> Quantidade de elementos

const tecnologias = new Map();

// set
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

// get
console.log(tecnologias.get('react').framework);
console.log(tecnologias);

// Inserindo chaves e valores variados
const chavesVariadas = new Map([
  [function (){}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

// has
console.log(chavesVariadas.has(123));

// delete
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));

// size
console.log(chavesVariadas.size);
