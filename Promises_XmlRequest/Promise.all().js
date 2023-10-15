/*
O método Promise.all() é na verdade uma promessa que recebe uma série de promessas (um iterável) como entrada. 
Ele retorna uma única promessa que é resolvida quando todas as promessas foram aprovadas como um iterável, 
que foram resolvidas ou quando o iterável não contém promessas. De maneira simples, 
se qualquer uma das promessas passadas for rejeitada, o método Promise.all() rejeita de forma assíncrona o valor 
da promessa que já foi rejeitada, independentemente de as outras promessas terem sido resolvidas ou não.
*/

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false)

        setTimeout(() => {
            resolve(msg + ' - Passei na promise')
        }, tempo)
    })
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject

const promisesArray = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
]

Promise.all(promisesArray)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })

/*
Promise.all([esperaAi('frase 1', 1000), esperaAi('frase 2', 1000), esperaAi('frase 3', 1000), esperaAi('frase 4', 1000)])
    .then(function(valor){
        console.log(valor)
    })
*/