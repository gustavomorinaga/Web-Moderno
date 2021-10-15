function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2; // OU
    const comprarTV50 = trabalho1 && trabalho2; // E
    //const comprarTV32 = !!(trabalho1 ^ trabalho2); // Bitwise xor
    const comprarTV32 = trabalho1 != trabalho2; // DIFERENTE
    const manterSaudavel = !comprarSorvete; // Operdaor Unário, conversão lógica

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));