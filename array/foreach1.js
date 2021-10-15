const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array) {     // Foreach irá percorrer a array e, para cada elemento irá executar uma função.
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)