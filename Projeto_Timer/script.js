let timer = [0,0,0]
let atualizar;
let relogio = document.getElementById('relogio')
let buttons = document.getElementsByTagName('button')

buttons[0].addEventListener('click', function(){ atualizar = setInterval(iniciar,1000)})
buttons[1].addEventListener('click',pausar)
buttons[2].addEventListener('click',zerar)

let verificaZero = (x) => { if(x < 10){ x = '0'+ x } return x }

function iniciar(){
        timer[0]++
        if(timer[0] == 60){
            timer[0] = 0
            timer[1]++
            if(timer[1] == 60){
                timer[1] = 0 
                timer[2]++
            }        
        } 
        relogio.innerText =`${verificaZero(timer[2])}:${verificaZero(timer[1])}:${verificaZero(timer[0])}`
        relogio.style.color = 'black'
}

function pausar(){ 
    clearInterval(atualizar)
    relogio.style.color = 'red' 
}

function zerar(){
    clearInterval(atualizar)
    timer = [timer[2],timer[1],timer[0]] = [0,0,0]
    relogio.innerText = `00:00:00`
    relogio.style.color = 'black'
}

