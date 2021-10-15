//setInterval executa várias vezes uma tarefa num intervalo de tempo.

let contador = () => {
    this.i = 0;

    setInterval(() => {
        this.i++;
        console.log(this.i);
    }, 1000); //Conte várias vezes a cada 1 segundo. (1000 milissegundos = 1 segundo)
}

contador();