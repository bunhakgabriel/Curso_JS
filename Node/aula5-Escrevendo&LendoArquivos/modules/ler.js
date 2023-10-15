const fs = require('fs').promises

//Essa função é uma promisse, pois esta retornando um 'fs', e na linha 1 o fs foi definido como promise
module.exports = (caminho) => fs.readFile(caminho, 'utf8')