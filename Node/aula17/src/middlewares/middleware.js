exports.meuMiddleware = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.' //Serve para injetar dados em varias rotas, neste exemplo vai para todas as rotas, pois nas requisições de todas as rotas esse middleware é executado
    //Essa variavel esta disponivel para ser usada no arquivo ejs
    next()
}



//Esse middleware será executado em todas as requisições da pagina

//A variavel 'umaVariavelLocal' vai estar disponivel em todas as paginas, pois definimos ela em um middleware sem rota

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

