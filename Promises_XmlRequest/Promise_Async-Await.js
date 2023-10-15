function rand(min = 0, max = 3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min) 
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }
        
        resolve(msg.toUpperCase() + ' - Passei na promise')
        return
     } , tempo)
    })
}

// esperaAi('Fase 1', rand())
//    .then( valor => {
//        console.log(valor)
//        return esperaAi('Fase 2', rand())
//    })
//    .then( valor => {
//        console.log(valor)
//        return esperaAi('Fase 3', rand())
//    })
//    .then( valor => {
//        console.log(valor)
//        return valor
//    })
//    .then( valor => {
//        console.log('Terminamos na fase:', valor)
//    })
//    .catch( valor => { console.log(valor) })

/* 
  O operador await é utilizado para esperar por uma Promise. Ele pode ser usado apenas dentro de uma async function.
  A expressão await faz a execução de uma função async pausar, para esperar pelo retorno da Promise, não importa quanto tempo a promise demorar.
  e resume a execução da função async quando o valor da Promise é resolvido. Ele então retorna o valor final da Promise. 
  Se uma Promise é passada para uma expressão await, ele espera pela finalização da Promise e retorna seu valor final.
*/

/*
async function executa(){
    const fase1 = await esperaAi('Fase 1', rand())
    console.log(fase1)

    const fase2 = await esperaAi(2, rand())

    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3)

    console.log('Terminamos na fase:', fase3)
}
executa()
*/

/* A função executa() faz a mesma coisa que o código da linha 21 ate a linha 37, só que de uma forma mais limpa,
   o unico problema é que se a promise cair no reject() a função executa() dara problema, o 'await' é como se fosse
   um then(), e neste exemplo não inserimos o catch.
   Sem o 'async' na frente da função executa() o 'await' não funciona.
*/

//Os dois códigos abaixo resolvem esse problema

//Código 1
/*
async function executa(){
    const fase1 = await esperaAi('Fase 1', rand()).catch( e => console.log(e))
    console.log(fase1)

    const fase2 = await esperaAi('Fase 2', rand()).catch( e => console.log(e))
    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', rand()).catch( e => console.log(e))
    console.log(fase3)

    console.log('Terminamos na fase:', fase3)
}
executa()
*/

//Código 2
async function executa(){
    try{
        const fase1 = await esperaAi('Fase 1', rand())
        console.log(fase1)

        const fase2 = await esperaAi(1, rand())
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)

        console.log('Terminamos na fase:', fase3)
    } catch(e) {
        console.log(e)
    }
}
executa()

//Em certas situações é mais facil usar then e catch,
//em outras é mais facil usar async e await

/*

Imagine que a promise da 'frase 1' demore 5 segundos para ser executada e a da 'frase 2' demore 3 segundos, 
com o async e await o código vai esperar a promise da 'frase 1' terminar para executar a da 'frase 2', 
sem o async e await a 'frase 2' seria executada antes pois o seu tempo de execução é menor.
O async e await nada mais são do que uma sintaxe mais limpa que o then() e catch(), ambos fazem a mesma coisa

*/

//Async vai permitir que você use a palavra await dentro de uma função pra você esperar uma promise ser finalizada

//As promises tem 3 estados 
// 1 -> pending , é uma promise que foi executada mais não foi retornada nem com then() nem com async/await
// 2 -> fullfilled , significa que a operação foi concluída com sucesso.
// 3 -> rejected , significa que a operação foi rejeitada