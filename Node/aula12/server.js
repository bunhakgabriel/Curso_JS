//http://localhost:3000/testes/123/gabriel/?nome=Gabriel&sobrenome=Bunhak
//copie e cole a URL acima no navegador para testar

// req.params = rota da url
// req.query = queryString da url
// req.body = corpo da requisição

const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
                                               
app.use( express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public'))) //Esse vai ser o conteudo estatico do nosso front-end, ele esta na pasta public, para renderizalo usamos 'express.static(caminho)'
//Conteudo estatico é aquilo que todos os usuarios irao ver no servidor

app.set('views', path.resolve(__dirname, 'src', 'views')) //Esse é o caminho absoluto da pasta views, nós não precisariamos necessariamente usar o 'path', poderia ser feito de outra forma
app.set('view engine', 'ejs') //precisamos instalar o ejs para usa-lo, (obs: pesquisar sobre views engine e ejs)

app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

