// O código abaixo utiliza promises

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    }) 
}

document.addEventListener('click', e => {
    e.preventDefault()
    const el = e.target
    const tag = el.tagName.toLowerCase()
    
    if(tag === 'a'){
        carregaPagina(el)
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href')
    
    const objConfig = {
            method: 'GET',
            url: href, 
        }

    request(objConfig).then( response => {
        carregaResultado(response)
    }).catch( status => {
        console.log(status)
    } )

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}


// O código abaixo utiliza callback()
/*
const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send(null)

    //Esse addEventlistener vai checar quando a requisição xhr terminou de ocorrer (evento load), ou seja, quando ela foi carregada
    //Quando essa checagem ocorrer nós ja vamos ter recebido a resposta do servidor, então nós vamos receber um código de resposta, se foi um código http de sucesso ou um código de falha
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener('click', e => {
    e.preventDefault()
    const el = e.target
    const tag = el.tagName.toLowerCase()
    
    if(tag === 'a'){
        carregaPagina(el)
    }
})

function carregaPagina(el){
    const href = el.getAttribute('href')
    
    const objConfig = {
            method: 'GET',
            url: href, 
            success(response){
                carregaResultado(response)
            },
            error(errorText){
                console.log(errorText)
            }
        }

    request(objConfig)

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

*/