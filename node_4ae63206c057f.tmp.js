function horas(){

var horario = new Date()

console.log('horas', horario.getHours())
console.log('minutos', horario.getMinutes())
console.log('segundos', horario.getSeconds())

}

setInterval(horas, 1000)


