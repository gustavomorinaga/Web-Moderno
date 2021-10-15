function declararMencao(media) {
    if(media == 10){
        console.log('Aprovado com Louvor');
    } else if(media >= 7){
        console.log('Aprovado');
    } else if (media < 7 && media > 5){
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
}

declararMencao(10)