//http://localhost:3000/testes/123/gabriel/?nome=Gabriel&sobrenome=Bunhak
//copie e cole a URL acima no navegador para testar

// req.params = rota da url
// req.query = queryString da url
// req.body = corpo da requisição

const express = require('express')
const app = express()
        
//Usamos esse middleware(função) para poder receber o req.body
app.use(
    express.urlencoded(
        {
         extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome"><br><br>
        Sobrenome: <input type="text" name="sobrenome"><br><br>
        <button>Enviar formulario</button>
        </form>
    `)
})

app.get('/testes/:idUsuarios?/:nomeUsuario?', (req, res) => {
    res.send(req.params)
    console.log(req.params) 
    console.log(req.query)
    console.log(req.body)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

