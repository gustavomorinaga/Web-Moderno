// Função Construtora funciona como um molde para cada objeto resultante.
// OBS: Para transformar algo em público, utiliza-se this.

/*function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado:
    let velocidadeAtual = 0;

    // Método público:
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // Método público:
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());*/

function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado:
    let velocidadeAtual = 0;

    // Método público:
    this.acelerar = () => velocidadeAtual + delta <= velocidadeMaxima ? velocidadeAtual += delta : velocidadeAtual = velocidadeMaxima;

    // Método público:
    this.getVelocidadeAtual = () => velocidadeAtual;
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());