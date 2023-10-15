//Quando uma promisse é criada quer dizer que algo vai acontecer nesse código
//Como por exemplo, nós vamos esperar uma resposta de um servidor externo
// e assim que essa resposta for recebida nós iremos resolver essa promessa
//Quando tudo estiver certo com a promessa nós utilizaremos o "resolve"
//Quando der algum erro ou a resposta não foi a esperada utilizaremos o "reject"
//Nós podemos continuar a promessa baseada na resposta que nós recebemos utilizando o then

const myPromise = new Promise((resolve, reject) => {
    const nome = 'gabriel' //Imagine que esse nome chegou de uma requisição externa

    if(nome === 'matheus'){
        resolve('Usuário Matheus encontrado!')
    } else {
        reject('o usuário Matheus não foi encontrado!')
    }
})

//Nós usamos o metodo then() e catch para poder ver a promessa sendo executada
//A promessa só vai ser executada com o metodo then() e/ou catch, sem ele o console.log ficará em branco
//O resolve() executa o then, e o reject() executa o catch
//Se o seu código entrou no bloco reject() e nao existe um "catch" o código dara erro

myPromise.then((resposta) => {
    console.log(resposta)
}).catch(resposta => {
    console.log(resposta)
})