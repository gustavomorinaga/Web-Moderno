const Peso1 = 1.0; //Valor numérico normal
const Peso2 = Number("2.0"); //O texto inserido se converte em número

console.log(Peso1, Peso2); //Imprime as variáveis na tela
console.log(Number.isInteger(Peso1)); //Diz se o valor é INTEIRO
console.log(Number.isInteger(Peso2));

const Avaliacao1 = 10;
const Avaliacao2 = 9.5;

const total = Avaliacao1 * Peso1 + Avaliacao2 * Peso2;
const media = total / (Peso1 + Peso2);

console.log(total);
console.log(media.toFixed(2));
console.log(media.toString(2));