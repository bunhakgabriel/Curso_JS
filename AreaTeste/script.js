const mostrarResposta = () => {
    const identElementClick = el.dataset.ident

    const identElementResp = 
        document.querySelector(`[data-paragraph="${identElementClick}"]`)


    const arrayIdentElementResp = 
        Array.from(document.querySelectorAll('.selectJs'))
    
    /*
    arrayIdentElementResp.map( valor => {
        if(valor.classList.contains('action')){
            return valor.classList.remove('action')
        }
        return valor

    })
    */    

    identElementResp.classList.toggle('action')

}

document.addEventListener('click', e => {
    el = e.target

    if(el.classList.contains('btn') || 
       el.classList.contains('span') || 
       el.classList.contains('fas')){
        mostrarResposta()
       }

})

