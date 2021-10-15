// estrategia 1 para gerar valor padrão
function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c;
}

console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0));

//estrategia 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //Utilizar esta estrutura para gerar valor padrão
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//Valor padrão do es2015 (ótimo para valores numéricos)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));