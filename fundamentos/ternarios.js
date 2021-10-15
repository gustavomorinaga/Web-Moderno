// Comparação lógica que retorna dois valores definidos:

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

// Variavel = Variavel de Retorno => Variavel de Retorno + Expressão Lógica ? Verdadeiro : Falso;

console.log(resultado(6));




const resultado2 = media => media !== undefined || null ? media : 5;

console.log(resultado2(0))


const resultado3 = valor => valor = isNaN(valor) ? 1 : valor

console.log(resultado3('a'))