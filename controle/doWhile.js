function getNumeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

//Faça uma coisa até que a opcão seja -1.

do {
    opcao = getNumeroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida é ${opcao}.`);
} while (opcao != -1);