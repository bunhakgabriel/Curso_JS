const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req, res, next){
    console.log('Passei no seu middleware.')
    next()
}

function ultimoMiddleware(req, res){
    console.log('Requisição encerrada')
}

//Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, ultimoMiddleware)
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.paginaContato)

module.exports = route
