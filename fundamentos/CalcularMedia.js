let estado
const Nota1 = 7
const Nota2 = 5
const Nota3 = 3
const Nota4 = 6.5
let isAprovado

const media = (Nota1 + Nota2 + Nota3 + Nota4) / 4
if (media < 5) {
    estado = "REPROVADO";
    isAprovado = 0;
} else {
    estado = "APROVADO";
    isAprovado = 1;
}

console.log(media.toFixed(2), estado)
console.log(typeof media) //Diz o tipo da variável

//Testa se foi aprovado com Booleano

console.log("Foi Aprovado? R: ", !!(isAprovado))