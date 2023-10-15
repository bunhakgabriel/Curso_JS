/*
Promise. resolve() e Promise. reject() são atalhos para se criar manualmente uma promise que já foi resolvida 
ou rejeitada, respectivamente. Isso pode ser útil em algumas situações.
Se nós ja temos os dados necessarios em maos, não é necessario esperar até que uma promise seja resolvida, basta usar 
o promise.resolve()
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

/*
Se o código cair no bloco 'if', a promise vai ser entregue logo de cara pois ela ja esta resolvida e ja tem
um valor retornado, se o código cair no 'else', a função esperaAi() vai ser executada e vai retornar uma promise
que vai retornar um valor, ou seja , bloco 'if' -> dado ja esta em mãos, bloco 'else' -> o dado vai ser procurado
*/

function baixaPagina(){
    const emCache = false

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina().then(valor => {
    console.log(valor)
}).catch( valor => {
    console.log(valor)
})
