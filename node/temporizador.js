const schedule = require('node-schedule')   // <- Importando o agendador.

// MANEIRA 1:

// Sintaxe: schedule.scheduleJob('segundos minutos horas dia mês dia_da_semana', função)
                                  //  */5: de 5 em 5 segundos.
const tarefa1 = schedule.scheduleJob('*/5 * 1 * * 1', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())    // new Date().getSeconds() – atualização dos segundos.
})

// Temporizador para cancelar tarefas em 20 segundos:
setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

/*
setImmediate
setInterval
*/

// MANEIRA 2:

const regra = new schedule.RecurrenceRule() // Definindo regra de recorrência dos horários.
regra.dayOfWeek = [new schedule.Range(1,5)] // Cada número representa o dia da semana, então (1,5) representa de segunda a sexta.
regra.hour = 1                              // Hora quer vai executar.
regra.second = 30                           // Executando sempre que o segundo for 30.

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})