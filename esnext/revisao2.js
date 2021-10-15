// Arrow Function
const soma = (a, b) => a + b;

console.log(soma(10, 5));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});

lexico1();
lexico2();

// Parâmetro Padrão
function log(texto = 'Node.js') {
  console.log(texto);
}

log();  // Executa o valor padrão 'Node.js'
log('Novo valor!'); // Executa o novo valor atribuído

// Operador Rest (vários parâmetros)
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n);

  return total;
}

console.log(total(2, 3, 4, 5));
