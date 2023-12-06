//Esse arquivo inteiro é novo na pasta 'aula14

const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    titulo: String, //O dado 'titulo' será do tipo string e ele precisa obrigatoriamente ser enviado (required: true)
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema)

//Nesse exemplo vamos criar coisas na base de dados pra ver se esta tudo funcionando

module.exports = HomeModel