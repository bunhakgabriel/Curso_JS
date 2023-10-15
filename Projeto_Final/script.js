let cont = 0
let array = []

function enviar(){

    let resp = document.getElementById('resp')

            let pessoa = {
                nome:  document.getElementById('nome').value,
                sobrenome:  document.getElementById('sobrenome').value,
                peso:  document.getElementById('peso').value,
                altura:  document.getElementById('altura').value,

                escreva() {
                    resp.innerHTML += `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura} <br>`
                }    

            }

        array[cont] = pessoa
        cont++    

    pessoa.escreva()

            console.log(array)

}





