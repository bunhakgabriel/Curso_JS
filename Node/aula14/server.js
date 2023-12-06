//http://localhost:3000/testes/123/gabriel/?nome=Gabriel&sobrenome=Bunhak
//copie e cole a URL acima no navegador para testar

//URL MondoDB: mongodb+srv://bunhak:<password>@cluster0.onqtouk.mongodb.net/?retryWrites=true&w=majority

// req.params = rota da url
// req.query = queryString da url
// req.body = corpo da requisição

require('dotenv').config() //nova linha do projeto //Esse comando serve para pegarmos a url do banco de dados que esta no arquivo '.env', isso evita que nossos dados de usuario e senha fiquem expostos 

const express = require('express')
const app = express()
const mongoose = require('mongoose') //nova linha do projeto

mongoose.connect(process.env.CONNECTIONSTRING) //nova linha do projeto //Esse comando retorna uma promessa
    .then(() => {
        console.log('Conectei á base de dados') 
        app.emit('pronto') //Esse app.emit serve para a aplicação se conectar a base de dados antes do servidor ser executado, isso é feito para não correr o risco do servidor ser executado e ocorrer algum erro na base de dados, se isso ocorrer a nossa aplicação vai estar no 'ar' só que sem acesso ao banco de dados, os clientes não vão conseguir carregar suas informações. Com app.emit se a aplicação não se conectar a base de dados o servidor não sera executado
    })
    .catch( e => console.log(`ERROR: ${e}`))

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')
                                               
app.use( express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public'))) //Esse vai ser o conteudo estatico do nosso front-end, ele esta na pasta public, para renderizalo usamos 'express.static(caminho)'
//Conteudo estatico é aquilo que todos os usuarios irao ver no servidor

app.set('views', path.resolve(__dirname, 'src', 'views')) //Esse é o caminho absoluto da pasta views, nós não precisariamos necessariamente usar o 'path', poderia ser feito de outra forma
app.set('view engine', 'ejs') //precisamos instalar o ejs para usa-lo, (obs: pesquisar sobre views engine e ejs)

app.use(meuMiddleware)
app.use(routes)

app.on('pronto', () => {                                        //nova linha do projeto
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})


