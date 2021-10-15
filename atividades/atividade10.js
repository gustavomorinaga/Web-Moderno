// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível 
// por 3 e retorne true ou false.

const imprimir = (valor) => console.log(valor)

const verificarDevisivel = (valor) => {
    if (valor % 3 === 0){
        return true
    } else {
        return false
    }
}

imprimir(verificarDevisivel(9))
imprimir(verificarDevisivel(11))
imprimir(verificarDevisivel(15))