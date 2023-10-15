//fetch('pessoas.json') //Essa URL esta dentro do nosso próprio servidor
//.then(response => response.json() )
//.then(json => { mostrarDados(json) })

//As linhas de código '7' e '8' fazem a mesma coisa que as linhas '1', '2' e '3'

axios('pessoas.json')
    .then(response => mostrarDados(response.data))

function mostrarDados(dados){
    let div = document.querySelector('.resultado')

    for(let pessoa of dados){
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let td1 = document.createElement('td')
        td.innerText = 'nome: ' + pessoa.nome
        td1.innerText = 'email: ' + pessoa.email

        tr.appendChild(td)
        tr.appendChild(td1)
        div.appendChild(tr)
    }
}

