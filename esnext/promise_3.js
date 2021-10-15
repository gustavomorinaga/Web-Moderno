function gerarNumeroEntre(min, max) {
  
  // Invertendo valores que no mínimo é maior que o valor máximo:
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise(resolve => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator + min);
    resolve(aleatorio);
  });
}

gerarNumeroEntre(10, 30)
  .then(num => num * 10)
  .then(numX10 => `O número gerado foi ${numX10}`)
  .then(console.log);
