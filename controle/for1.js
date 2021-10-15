//Utilizar o For para quando sabemos o intervalo a ser executado.

let contador = 1;

while(contador <= 10){
    console.log(`contador = ${contador}`);
    contador++;
}


const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}