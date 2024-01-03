const mongoose = require('mongoose')

//Crinado um esquema
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String 
    //Podemos colocar Number, boolean, array e uma infinidade de types
})

//Criando um model              ('nome do model', 'esquema')  
const HomeModel = mongoose.model('Home', HomeSchema)

//Com esse model nós podemos selecionar coisas na base de dados, podemos criar coisas na base de dados e etc
//Nesse projeto vamos apenas criar coisas para ver se esta tudo certo

//Criando algo na base de dados
//Vamos mandar os dados 'titulo' e 'descricao' do nosso HomeSchema
//.create() retorna uma promise
HomeModel.create({ //Basicamente estamos criandos atributos para as nossas propriedades que forao definidas no esquema e mandando elas para um banco de dados no mongoDb
    titulo: 'priscila claudio de camargo quadros',
    descricao: 'descricao de priscila'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(`ERROR:${e}`))
