const soma = (x = 0, y = 0) => x + y;
const subt = (x = 0, y = 0) => x - y;
const divi = (x = 0, y = 0) => x / y;
const mult = (x = 0, y = 0) => x * y;

/*function imprimirResultado (a, b, operacao = soma) {
    return console.log(operacao(a, b));
}*/

/*const imprimirResultado = function(a, b, operacao = soma){
    return console.log(operacao(a, b));
}*/

const imprimirResultado = (a, b, operacao = soma) => console.log(operacao(a, b));

imprimirResultado();
imprimirResultado(5, 2);
imprimirResultado(10, 5, soma);
imprimirResultado(10, 5, subt);
imprimirResultado(10, 5, divi);
imprimirResultado(10, 5, mult);