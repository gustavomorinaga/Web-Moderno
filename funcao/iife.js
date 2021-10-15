// IIFE -> Immediately Invoked Function Expression, utilizado para fugir do escopo global, onde evita que outros
// scripts possam acessar tais variáveis e manipulá-las, evitando bugs no aplicativo.

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()