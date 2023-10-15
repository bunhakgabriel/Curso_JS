const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

function criaLi(){
    const li = document.createElement('li')
    return li
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus()
}

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'apagar'
    // botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}



document.addEventListener('click', function(event){
    const elemento = event.target

    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove()
        salvarTarefas() // (essa função salva os dados quando o navegador é fechado)
    }
})

//LocalStorage
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('apagar','').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}
//

//Essa função vai ler as tarefas e jogar elas de volta na ul
//local storage voce nao precisa passar por parametro para usar em outras funções, 
//ele é global do navegador

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    console.log(listaDeTarefas)

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()

