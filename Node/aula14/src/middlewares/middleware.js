module.exports = (req, res, next) => {
    console.log()
    if(req.body.nome){
        req.body.nome = req.body.nome.replace('Miranda', 'NÃO USE MIRANDA')
        console.log(`vi que você postou ${req.body.nome}`)
    }
    next()
}