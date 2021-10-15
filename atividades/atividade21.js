/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do 
conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 

1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130.
*/

const plano = (idade, base = 100) => {
    let total = 0

    if (idade < 10) {
        total = base + 80
    } else if ((idade >= 10) && (idade < 30)) {
        total = base + 50
    } else if ((idade >= 30) && (idade < 60)) {
        total = base + 95
    } else if (idade >= 60) {
        total = base + 130
    }

    return `R$ ${Math.floor(total).toFixed(2)}`
}

console.log(plano(8))
console.log(plano(15))
console.log(plano(35))
console.log(plano(52))
console.log(plano(80))