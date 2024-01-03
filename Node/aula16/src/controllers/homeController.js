const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, res, next) => {
    //console.log(req.session.usuario2)
    res.render('index', { //Os dados deste segundo parâmetro(objeto) serão injetados no nosso index.ejs, existe ainda outra forma de injetar esses dados, ela é mais recomendada quando queremos colocar dados em mais de uma view, ou em mais de uma rota
        titulo: 'Este será o título da página',     //Essa variavel esta disponivel para ser usada no arquivo ejs, contudo só podera ser usada na rota da home da pagina
        numeros: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]      //Essa variavel esta disponivel para ser usada no arquivo ejs, contudo só podera ser usada na rota da home da pagina
    })
    next()
}

exports.trataPost = (req, res) => {
    res.send(req.body)
}

