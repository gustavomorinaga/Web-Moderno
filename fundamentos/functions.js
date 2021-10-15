//Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(5, 10)

function imprimirString(c){
    console.log(c)
}

imprimirString("Olá mundo!")

function concat(a, b, c){
    console.log(a + b + c)
}

concat(5, 15, " Unidades!")

//Função com retorno

function soma(a, b = "!"){
    return a + b
}

console.log(soma("Olá"))