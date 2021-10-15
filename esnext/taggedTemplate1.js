// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra String';
}

const aluno = 'Gui';
const situacao = 'aprovado';

console.log(tag `${aluno} está ${situacao}.`);
