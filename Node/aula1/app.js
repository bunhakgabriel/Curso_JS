const objeto = require('./mod1') //Dessa forma estamos importando o objeto inteiro
//const sobrenome = require('./mod1').sobrenome //Dessa forma estamos importando apenas a chave sobrenome

console.log(objeto)

const { nome, sobrenome, falaNome } = require('./mod1')

console.log(nome, sobrenome, falaNome)

