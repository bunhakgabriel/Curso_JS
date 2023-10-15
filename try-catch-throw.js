/*
function horario(){
    var data = new Date()
    return data.toLocaleTimeString('pt-BR')
}

function mostrarHora(){
    console.log(horario())
}

setInterval(mostrarHora,1000)
*/

// Ou 

function horario(){
    var data = new Date()
    return data.toLocaleTimeString('pt-BR')
}

setInterval( function () {
                console.log(horario())
            } , 1000 )
