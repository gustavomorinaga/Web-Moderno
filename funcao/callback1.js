const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);  //Callback para cada elemento de uma array, dando retorno de índice e nome.
}

fabricantes.forEach(imprimir);

fabricantes.forEach(fabricante => console.log(fabricante))