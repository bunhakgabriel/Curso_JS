const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, res, next) => {
    console.log(req.session.usuario2)
    res.render('index')
    next()
}

exports.trataPost = (req, res) => {
    res.send(req.body)
}

