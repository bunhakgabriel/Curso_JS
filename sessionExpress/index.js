const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const port = 3000
var path = require('path')
const app = express()

var login = 'gabriel'
var senha = '123'

app.use(session( {secret:'private-key'} ))
app.use(bodyParser.urlencoded({extended:true}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req,res) => {
    if(req.session.login){
        res.render('logado', {login: login})
        console.log(req.session)
    } else{
        res.render('index')
        console.log(req.session.login)
    }
    
})

app.post('/', (req,res) => {

    if(req.body.password == senha && req.body.login == login){
        req.session.login = login
        req.session.teste = 'qualquer coisa'
        console.log(req.session)
        console.log(req.session.login)
        res.render('logado', {login: login})
    } else {
        res.render('index')
    }

})

app.get('/deslogado', (req,res) => {
    res.send('voce foi deslogado')
    req.session.destroy()
})

app.listen(port, ()=>{
    console.log('servidor rodando')
})