const HomeModel = require('../models/HomeModel') //nova linha no preojeto

HomeModel.create({                              //nova linha no preojeto
    titulo: 'Um título de teste 1',
    descricao: 'Uma descrição de teste 1'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(`ERROR: ${e}`))

exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send(req.body)
}

