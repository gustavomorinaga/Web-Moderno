console.log('01)', '1' == 1); // Comparação lógica normal;
console.log('02)', '1' === 1); //Comparação se os valores são extritamente iguais (String, Inteiro, Objeto, Função...);
console.log('03)', '1' != 1); //Comparação se os valores são distintos;
console.log('04)', '1' !== 1); //Comparação se os valores são extritamente distintos;

//Comparações lógicas de maior, menor e igual;

console.log('05)', '3' > 2);
console.log('06)', '3' < 2);
console.log('07)', '3' >= 2);
console.log('08)', '3' <= 2);

const day1 = new Date(0); // Comando de obtenção de data e com predefinição 0 (ponto de origem) - 1970;
const day2 = new Date(0);
console.log('09)', day1 === day2); // Comparação com resultante falsa pois estão sendo comparadas os endereços de memória;
console.log('10)', day1 == day2);
console.log('11)', day1.getTime() == day2.getTime()); //Comparação com resultante verdadeira pois são comparados os números;