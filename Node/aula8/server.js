//http://localhost:3000/testes/123/gabriel/?nome=Gabriel&sobrenome=Bunhak
//copie e cole a URL acima no navegador para testar

// req.params = rota da url
// req.query = queryString da url
// req.body = corpo da requisição

const express = require('express')
const app = express()
                                               
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
        Nome do: <input type="text" name="nome">
        <button>Enviar formulario</button>
        </form>
    `)
})

app.get('/testes/:idUsuarios?/:nomeUsuario?', (req, res) => {
    res.send(req.params)
    console.log(req.params)
    console.log(req.query)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Recebi o formulário')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

