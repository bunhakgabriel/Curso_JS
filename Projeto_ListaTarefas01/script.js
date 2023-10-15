let cont = 1
let ul = document.getElementById('lista')

function tarefas(){
    let nomeTarefa = document.getElementById('add_tarefas').value
    let li = document.createElement('li')
    let button = document.createElement('button')
    adicionarElementos(nomeTarefa,li,button)
}

function adicionarElementos(nomeTarefa,li,button){
    li.classList.add(cont)
    button.classList.add(cont)
    cont++

    li.innerText = nomeTarefa
    button.innerText = 'Apagar'
    li.appendChild(button)
    ul.appendChild(li)

    apagarElementos(nomeTarefa,li,button,cont)
}

function apagarElementos(nomeTarefa,li,button,cont){
    document.addEventListener('click',function(event){
        let elemento = event.target

        for(i = 0; i < cont; i++){

            if(elemento.classList.contains(i) && li.classList.contains(i)){
                apagar(li)
            }
            
        }
    })

    function apagar(li){
        li.remove()
    }

}
 