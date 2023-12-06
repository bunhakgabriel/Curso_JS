let contas = require('./ler')

let form = document.querySelector('form')
let login = document.getElementById('login')
let senha = document.getElementById('senha')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('teste')
})


