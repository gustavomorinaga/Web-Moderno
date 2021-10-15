// Em function declaration, o JavaScript irá carregar primeiro as funções
//para depois executá-las. Por isso que o console.log antes da função irá funcionar.

console.log(soma(3, 4));

// Em function expression e named, o JavaScript irá fazer a ação antes de carregar a função,
//ocorrendo erros no início da execução.

//console.log(sub(3, 4));
//console.log(mult(3, 4));

// function declaration
function soma(x, y){
    return x + y;
}

// function expression
const sub = function(x, y){
    return x - y;
}

console.log(sub(3, 4));

// named function expression
const mult = function mult(x, y){
    return x * y;
}

console.log(mult(3, 4));