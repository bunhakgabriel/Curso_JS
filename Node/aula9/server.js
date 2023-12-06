//http://localhost:3000/testes/123/gabriel/?nome=Gabriel&sobrenome=Bunhak
//copie e cole a URL acima no navegador para testar

// req.params = rota da url
// req.query = queryString da url
// req.body = corpo da requisição

const express = require('express')
const app = express()
const routes = require('./routes')
                                               
app.use( express.urlencoded({extended: true}))
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

