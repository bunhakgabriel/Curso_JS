const fs = require('fs')
let dados = fs.readFileSync('dados.json', 'utf8')
dados = JSON.parse(dados)

exports.dados = dados


