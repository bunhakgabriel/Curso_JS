const button = document.getElementById('add')
const tarefa = document.getElementById('tarefa')
const ul = document.getElementById('lista')

button.addEventListener('click', function(){
    if(!tarefa.value) return
    CriarTarefa()
})

//Essa função cria a tarefa chamando outras funções
function CriarTarefa(){    
    const li = CriarLi()
    const BtnDelete = CriarBtn()
    AdicionarElemento(tarefa,li,BtnDelete)
}

function CriarLi(){
    const li = document.createElement('li')
    return li
}

function CriarBtn(){
    const BtnDelete = document.createElement('button')
    BtnDelete.innerText = 'Apagar'
    BtnDelete.setAttribute('class', 'delete')
    return BtnDelete
}

function AdicionarElemento(tarefa,li,BtnDelete){
    li.innerHTML = `<span>${tarefa.value}</span>`
    li.appendChild(BtnDelete)
    ul.appendChild(li)
    tarefa.value = ''
}

addEventListener('click', function(e){
    elemento = e.target

    if(elemento.innerHTML === '<i class="fa-solid fa-trash"></i>' || elemento.classList.contains('delete')){
        elemento.parentElement.remove()
    }
})

function salvar(){
    var li = document.getElementsByTagName('li')
    var array = []

    for(let valor of li){
        array.push(valor.outerHTML)
    }

    var stringJson = JSON.stringify(array)
    localStorage.setItem('tarefas',stringJson)

}

function carregarTarefas(){
    var array = JSON.parse(localStorage.getItem('tarefas'))
    
    for(let valor of array){
        ul.innerHTML += valor
    }

}
if(localStorage.tarefas){
    carregarTarefas()
}