function esperarPor(tempo = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Executando promise...');
      resolve();
    }, tempo);
  });
}

// Executando vários "callbacks" um dentro de outro
esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);    // <- Quando não quiser colocar parâmetros, não é preciso () para executar função
