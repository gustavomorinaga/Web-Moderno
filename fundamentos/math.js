const raio = 6.5
const area = Math.PI * Math.pow(raio, 2)

console.log(area.toFixed(2))

console.log(Math.pow(6.5, 3))

let ArrayRandom = [];
let max = 5, min = 0;

for(let i = 0; i <= 4; i++){
    ArrayRandom[i] = Math.floor(Math.random() * (max - min) + min);
}

console.log(ArrayRandom[0] + " + " + ArrayRandom[4] + " = " + (ArrayRandom[0] + ArrayRandom[4]));
console.log(ArrayRandom[1] + " - " + ArrayRandom[2] + " = " + (ArrayRandom[1] - ArrayRandom[2]));