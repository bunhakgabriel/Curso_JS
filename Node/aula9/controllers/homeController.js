exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do: <input type="text" name="nome">
    <button>Enviar formulario</button>
    </form>
    `)
}

exports.trataPost = (req, res) => {
    console.log(req.body)
    res.send('Recebi o formulário')
}

