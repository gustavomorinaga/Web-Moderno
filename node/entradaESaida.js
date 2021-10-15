// Atribuindo novos comandos ao executar o arquivo (flags):
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

// Comando para anônimo: node entradaESaida -a   <- Caso seja '-a', irá rodar. Caso contrário, não irá.
// Comando para informar seu nome: node entradaESaida

if (anonimo) {
	process.stdout.write('Fala Anônimo!\r\n') // process.stdout.write() <- Processo de Saída Padrão, que vai imprimir na tela (.write).
	process.exit()      // Saindo do processo (.exit()).
} else {
	process.stdout.write('Informe o seu nome: ')
	process.stdin.on('data', data => {                  // process.stdin.on <- Processo de Entrada Padrão, que atribui dados (.on).
		const nome = data.toString().replace('\r\n', '')

		process.stdout.write(`Fala ${nome}!\r\n`)
		process.exit()
	})
}

// Sempre utilizar '\r\n' para quebrar linhar no terminal, pois não vem nativo.
