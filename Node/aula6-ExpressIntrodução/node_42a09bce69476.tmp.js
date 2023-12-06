//Tudo que você instala(módulos) você precisa importar para usar no seu projeto.
//neste caso vamos importar o express.
//tudo que esta na pasta nodeModules não precisa de caminho para importar, exemplo disso é o express, se algo esta fora da pasta nodeModules nós precisamos esprecificar o caminho de sua pasta para conseguir importar

const express = require('express')
const app = express()
console.log(app)

//Operações que tendem a ser feitas em uma api

//         criar   ler   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE
// é possivel ter cada um desses métodos (post, get, put, delete) na mesma rota, veja abaixo (se eu tenho um get e uma determinada rota, eu também posso ter um post, um put na mesma rota, e assim por diante)

// http://meusite.com/sobre <- GET -> //Ao digitarmos esse caminho com o método get estamos pedindo para o servidor entregar a pagina "sobre" de um site e ler seus dados
// isso são rotas, o exemplo acima é uma rota, e é nisso que o expres vai trabalhar, pra isso ele tem os métodos post, get, put, delete

// A rota '/' é a home do site

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})

// req = requisição, é oque eu estou pedindo, res = resposta, é oque eu vou mandar para o servidor
// nós trabalhamos no modo requisição resposta na internet, o cliente faz uma requisição, 
// o servidor tem um trabalho de entregar a resposta da requisição

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

// É preciso fazer o servidor ficar ouvindo em determinada porta do meu computador, eu preciso falar "olha servidor, qualquer requisição que chegar nessa porta você responde", uma porta é referente a um processo que está sendo executado no seu servidor, ou seja, se houver determinada coisa rodando em determinada porta no seu servidor e você tentar iniciar o express nessa porta ele não vai iniciar e vai dar um determinado erro nessa porta, por isso nós utilizamos portas que nao são muito utilizadas, porta 3000, porta 333, essas portas que nao tem coisas padrão rodando nelas, para dizer ao express 'escuta essa porta e qualquer coisa que chegar nela você responde' usamos listen(porta) 