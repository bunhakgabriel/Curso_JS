function meta(x){
    let diaSemana = x 

switch(diaSemana){
    case 0:
        diaSemana = 'domingo'
        break
    case 1:
        diaSemana = 'segunda'
        break    
    case 2:
        diaSemana = 'terça'
        break
    case 3:
        diaSemana = 'quarta'
        break  
    case 4:
        diaSemana = 'quinta'
        break
    case 5:
        diaSemana = 'sexta'
        break    
    case 6:
        diaSemana = 'sábado'
        break     
        
}
    return diaSemana    
}

const data = new Date('1987-04-25 00:00:00');
const dia = data.getDay()

const resp = meta(dia)

console.log(dia,resp)