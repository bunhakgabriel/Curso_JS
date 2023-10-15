/*
function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min) 
}

function esperaAi(msg, tempo, callback){
    setTimeout(() => {
        console.log(msg)
        if(callback)callback()
    }, tempo)
}

esperaAi('Frase 1', rand(1,3), function(){ 
    esperaAi('Frase 2', rand(1,3), function() { 
        esperaAi('Frase 3', rand(1,3)) 
    }) 
})
*/ 

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min) 
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Frase 1', rand(1, 3))
    .then( resposta => {
        console.log(resposta)
        return esperaAi('Frase 2', rand(1, 3)) //Estamos retornando outra promise dentro deste "then()"
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })

/* As promises são executadas em paralelo, isso significa que o javascript executa os códigos que ja estão prontos
antes da promise, pois a promise precisa esperar um valor chegar ate ela */

console.log('este código será executado antes da promise')







