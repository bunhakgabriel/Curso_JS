exports.paginaInicial = (req, res) => {
    res.render('index')//Ao invés de escrever o html da pagina aq nessa função como fizemos nos exemplos anteriores, nós escrevemos ele no arquivo index.ejs e o renderizamos/importamos aq, no caso o express está renderizando nosso html 
}

exports.trataPost = (req, res) => {
    console.log(req.body)
    res.send('Recebi o formulário')
}

