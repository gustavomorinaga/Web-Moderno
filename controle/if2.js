function teste1(nun) {
    if(nun > 7) {
        console.log(nun)
        console.log('Final')
    }
}

//teste1(6);
//teste1(8);

function teste2(nun) {
    if(nun > 7); {  //Tomar cuidado com o ";", não usar no bloco de estruturas de controle.
        console.log(nun)
    }
}

teste2(6);
teste2(8);