const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('Evento prevenido')
})

function imc(){

    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let retorno = document.getElementById('retorno')
    let resultado;

    let imc = peso / (altura*altura)

    if(peso === 0 ){
        retorno.innerText = `Peso invalido`
        retorno.style.backgroundColor = 'red'
    } else if(altura === 0){
        retorno.innerText = 'Altura invalida'
        retorno.style.backgroundColor = 'red'
    } else{

    if(imc < 18.5){
        resultado = 'Abaixo do peso'
        retorno.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`
        retorno.style.backgroundColor = 'aqua'
    } else if(imc >= 18.5 && imc <= 24.9){
        resultado = 'Peso normal'
        retorno.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`
        retorno.style.backgroundColor = 'aqua'
    } else if(imc >= 25 && imc <= 29.9){
        resultado = 'Sobrepeso'
        retorno.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`
        retorno.style.backgroundColor = 'aqua'
    } else if(imc >= 30 && imc <= 34.9){
        resultado = 'Obesidade grau 1'
        retorno.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`
        retorno.style.backgroundColor = 'aqua'
    } else if(imc >= 35 && imc <= 39.9){
        resultado = 'Obesidade grau 2'
        retorno.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`
        retorno.style.backgroundColor = 'aqua'
    } else{
        resultado = 'Obesidade grau 3'
        retorno.innerText = `Seu IMC é ${imc.toFixed(2)} (${resultado})`
        retorno.style.backgroundColor = 'aqua'
    }  
   
    }
}