//Desestruturação de uma funtion:

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {min: 50, max: 750}
console.log(rand(obj));
console.log(rand({min: 955}));
console.log(rand({}));

function rand2([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand2([50, 40]));