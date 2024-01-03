module.exports = (req, res, next) => {
    console.log()
    console.log('Passei no middleware global')
    if(req.body.nome){
        req.body.nome = req.body.nome.replace('Miranda', 'NÃO USE MIRANDA') //Esse req.body.nome é o valor name = "nome" do input do arquivo index.ejs -----> name = "nome"  req.body.nome
        console.log(`vi que você postou ${req.body.nome}`)
    }
    next()
}

//Esse middleware será executado em todas as requisições da pagina