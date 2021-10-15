//setTimeout é um temporizador, onde executa uma tarefa quando terminar o tempo determinado (no caso, 5 segundos).

const contador = () => {
    this.texto = "";

    setTimeout(() => {
        this.texto = "Olá, demorei 5 segundos para falar!";
        console.log(this.texto);
    }, 5000);
}

contador();