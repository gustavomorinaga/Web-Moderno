// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado 
// o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
// Utilize a estrutura Switch.

const diasUteis = (dia) => {
    switch (dia) {
        case 1:
            return `${dia} não é um dia útil.`
        case 2:
            return `${dia} é um dia útil.`
        case 3:
            return `${dia} é um dia útil.`
        case 4:
            return `${dia} é um dia útil.`
        case 5:
            return `${dia} é um dia útil.`
        case 6:
            return `${dia} é um dia útil.`
        case 7:
            return `${dia} não é um dia útil.`
        default:
            return `${dia} não é um valor correto.`
    }
}

console.log(diasUteis(1))
console.log(diasUteis(2))
console.log(diasUteis(3))
console.log(diasUteis(4))
console.log(diasUteis(5))
console.log(diasUteis(6))
console.log(diasUteis(7))
console.log(diasUteis(8))