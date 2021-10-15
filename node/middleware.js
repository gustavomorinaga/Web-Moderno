// Middleware Pattern (Chain of Responsibility) –  Muito utilizada e recomendada para flexibilizar as funções e reuso delas.

// MONTAGEM DOS PASSOS:
// Sintaxe: função = (contexto, proximo_passo) => { ...; proximo_passo() }

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()  // <- Próximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()  // <- Próximo passo
}

const passo3 = ctx => ctx.valor3 = 'mid2'   // Último passo não terá o next()

// EXECUÇÃO:
// Sintaxe: função(contexto, ...passos) => { execução_passo = indice => { 
//    existe, percurso, passo[indice](contexto, () => execução_passo (indice + 1)) 
//   }
//   execução_passo() 
//}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)   // <- (Conteúdo, passos...)
console.log(ctx)