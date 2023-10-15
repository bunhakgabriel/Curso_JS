// Uma fetch ja retorna uma promise por padrão, então não é preciso criar uma promise

document.addEventListener('click', e => {
    e.preventDefault()
    el = e.target
    tag = el.tagName.toLowerCase()
    
    if(tag === 'a'){
        request(el.href)
    }
})

function request(url){
    
    fetch(url)
    .then(response => {
        if(response.status !== 200) throw new Error('ERRO 404 NOSSO')
        return response.text()
    })
    .then(response => carregarHtml(response))
    .catch( e => console.log(e))

}

function carregarHtml(text){
    let div = document.querySelector('.resultado')
    div.innerHTML = text
}

