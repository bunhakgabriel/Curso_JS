//http://localhost:3000/testes/123/gabriel/?nome=Gabriel&sobrenome=Bunhak
//copie e cole a URL acima no navegador para testar

//URL MondoDB:mongodb+srv://bunhak:<password>@cluster0.onqtouk.mongodb.net/?retryWrites=true&w=majority

// req.params = rota da url
// req.query = queryString da url
// req.body = corpo da requisição

require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING) //Estamos pegando o conteudo da variavel CONNECTIONSTRING do arquivo .env
    .then( () => {
        console.log('Conectei a base de dados')
        app.emit('pronto') //Esse app.emit serve para a aplicação se conectar a base de dados antes do servidor ser executado, isso é feito para não correr o risco do servidor ser executado e ocorrer algum erro na base de dados, se isso ocorrer a nossa aplicação vai estar no 'ar' só que sem acesso ao banco de dados, os clientes não vão conseguir carregar suas informações. Com app.emit se a aplicação não se conectar a base de dados o servidor não sera executado
    })
    .catch( () => {
        console.log('Erro na conexão')
    })
//obs: se sua aplicação depende de uma base de dados é interessante você fazer essa conexão com a base antes de executar o servidor pois se o servidor é executado por primeiro e ocorre algum erro na base de dados, seus clientes terão porblemas para vizualizar as informações que estão no banco de dados

const session = require('express-session')
const MongoStore = require('connect-mongo') //Isso vai fazer as sessions serem salvas na base de dados, por padrão elas são salvas em memória 
const flash = require('connect-flash') //são as flashh-messages, elas são salvas na session

const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf') //Serve para que nenhum site externo consiga postar coisas dentro da nossa aplicação 
const meuMiddlewareGlobal = require('./src/middlewares/middleware') //Middleware global
                
app.use(helmet())
app.use(express.json())
app.use( express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public'))) //Esse vai ser o conteudo estatico do nosso front-end, ele esta na pasta public, para renderizalo usamos 'express.static(caminho)'
//Conteudo estatico é aquilo que todos os usuarios irao ver no servidor

//Todos esses app.use são todos middlewares

app.use(
    session({
        secret: 'secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
        }
    })
)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views')) //Esse é o caminho absoluto da pasta views, nós não precisariamos necessariamente usar o 'path', poderia ser feito de outra forma
app.set('view engine', 'ejs') //precisamos instalar o ejs para usa-lo, (obs: pesquisar sobre views engine e ejs)

app.use(csrf())

app.use(meuMiddlewareGlobal.meuMiddleware) //Execução do Middleware a nivel global, todas as requisições de todas as rotas vão passar nesse middleware    //Esse código permite a utilização da variavel 'umaVariavelLocal'
app.use(meuMiddlewareGlobal.checkCsrfError)
app.use(meuMiddlewareGlobal.csrfMiddleware)
app.use(routes)


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})

