var data = new Date

function horario(){
    return data.toLocaleDateString()
}

var horas = setInterval(horario,1000)