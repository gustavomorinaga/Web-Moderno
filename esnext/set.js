// SET -> Conjunto não indexado que não aceita repetições

// add/delete/size/has

const times = new Set();

times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo');
times.add('Vasco');   // Não irá funcionar pois já tinha sido adicionado

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));  // O nome da chave deverá ser igual ao que foi definida
times.delete('Flamengo');
console.log(times.has('Flamengo'));

// Criando Set a partir de um array
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);

console.log(nomesSet);
