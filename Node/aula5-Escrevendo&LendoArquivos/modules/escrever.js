//código linhas 4/8 basicamente cria um arquivo 'teste.txt' e insere o texto 'Frase1' nele.

/*
const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

fs.writeFile(caminhoArquivo, 'Frase 3')
*/

//código linhas 14/27 cria um arquivo 'teste.json', ai então criamos um array de objeto,
//cada objeto tem uma chave 'pessoa', então depois de criar esse array iremos inseri-lo no arquivo json,
//mas antes de inseri-lo precismos converter esse array para uma string no formato 'json', sempre que tivermos
//um arquivo no formato 'json', para inserir dados nele precisamos converter esses dados para 'json',
//se você não converter dara erro e os dados não serão inseridos.

/*
const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')

const pessoas = [
    { nome: 'João'},
    { nome: 'Maria'},
    { nome: 'Eduardo'},
    { nome: 'Luiza'}
]

const json = JSON.stringify(pessoas, '', 2)

fs.writeFile(caminhoArquivo, json)
*/

const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados)    
}











