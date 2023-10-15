/*
const fs = require('fs').promises
const path = require('path')

fs.readdir(path.resolve(__dirname))
    .then(files => { console.log(files) })
    .catch( error => { console.log(error) })
*/

//Veja outra forma de se fazer, as linhas 12/27 fazem praticamente a mesma coisa que as linhas 2/7, o primeiro código exibe os arquivos em array, o segundo nao.

/*
const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname) //Se o 'rootDir'(caminho do diretório) for enviado nós usaremos ele, se nenhum caminho for enviado(rootDir) nós usaremos o path
    const files = await fs.readdir(rootDir)
    walk(files)
}

function walk(files){
    for(let file of files){
        console.log(file)
    }
}

readdir('../../') // esse caminho '../../' está listando tudo que temos dentro da pasta 'cursoJS', tanto os arquivos quanto as pasta(diretórios)
*/

//Na próxima função vamos exibir apenas os arquivos, 
//quando o 'for' estiver iterando o array, se ele encontrar uma pasta ele vai abrir a
//pasta e exibir todos os seus arquivos, se ele encontrar um arquivo, 
//ele vai apenas exibir este arquivo, ou seja, vamos exibir todos os arquivos, 
//excluindo as pastas.

const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)

        if(stats.isDirectory()){
            readdir(fileFullPath)
            continue
        }

        console.log(file, stats.isDirectory()) //O método isDirectory() retorna true se o caminho do arquivo for Directory, caso contrário, retorna false, ou seja, se o 'file' for um diretório/pasta nós não queremos exibilo.
    }
}

readdir('../../') 