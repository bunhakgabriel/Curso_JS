/*

O método Promise.race() retorna uma promessa que cumpre ou rejeita assim que uma das promessas em um iterável 
cumpre ou rejeita, com o valor ou motivo dessa promessa.
É importante destacar que aquela promise que for concluida mais rapido vai ser retornada, as outras serão 
rejeitadas.

*/

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min) 
}

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
    esperaAi('Promise 1', rand(1, 4)),
    esperaAi('Promise 2', rand(1, 4)),
    esperaAi('Promise 3', rand(1, 4))
]

Promise.race(promisesArray)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })

//Promise.race() é uma corrida entre promises, a primeira a ser resolvida vai ser retornada.