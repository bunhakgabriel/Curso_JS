const form = document.getElementById('form1')
const span = document.querySelectorAll('span')
const array = ['Nome','Sobrenome','CPF','Usuário','Senha','Repetir Senha']

class Form{
    constructor(){
        this.nome = document.getElementById('nome').value
        this.sobrenome = document.getElementById('sobrenome').value
        this.cpf = document.getElementById('cpf').value
        this.usuario = document.getElementById('usuario').value
        this.senha1 = document.getElementById('senha1').value
        this.senha2 = document.getElementById('senha2').value
    }

    verificarInputVazio(){
        let cont = 0
        console.log(Object.values(this))
        for(let valor of Object.values(this)){
            if(!valor){
                span[cont].innerHTML = `Campo '${array[cont]}' não pode estar vazio`
                span[cont].style.color = 'red'
            } else {
                span[cont].innerHTML = ''
            }
            cont++
        }

    }

    verificarUsuario(){
        if(this.usuario.length < 3 || this.usuario.length > 12){
            span[3].innerHTML += `<br> Usuário inválido`
            span[3].style.color = 'red'
        }
    }

    verificarSenha(){
        if(this.senha1.length < 6 || this.senha1.length > 12){
            span[4].innerHTML += `<br> Senha entre 6 e 12 caracteres`
            span[4].style.color = 'red'
        } else { span[4].innerHTML = '' }

        if(this.senha2.length < 6 || this.senha2.length > 12){
            span[5].innerHTML += `<br> Senha entre 6 e 12 caracteres`
            span[5].style.color = 'red'
        } else { span[5].innerHTML = '' }
        
        if(this.senha1 != this.senha2){
            span[4].innerHTML += `<br> Campo senha e repetir senha devem ser iguais`
            span[5].innerHTML += `<br> Campo senha e repetir senha devem ser iguais`
            span[4].style.color = 'red'
            span[5].style.color = 'red'
        }
    }

    verificarCpf(){
        let cpfInicial = this.cpf.replace(/[^0-9]/g,'')
        let cpfArray = (Array.from(cpfInicial)).slice(0,9)

        function gerarDigito(){
            let cont = cpfArray.length + 2
            let digito = cpfArray.reduce(function(acumulador,vlr){
                cont--
                return acumulador += vlr * cont
            },0)

            digito = 11 - (digito % 11)
            cpfArray.push(digito.toString())

            if(cpfArray.length < 11){ gerarDigito() }
        }
        gerarDigito()

        let cpfFinal = (cpfArray.toString()).replace(/[^0-9]/g,'')
        
        if(cpfFinal != cpfInicial){
            span[2].innerHTML += `<br> Digite um CPF válido`
            span[2].style.color = 'red'            
        } else if(cpfInicial.charAt(0).repeat(cpfInicial.length) === cpfInicial){
            span[2].innerHTML += `<br> Digite um CPF válido`
            span[2].style.color = 'red'          
        }



    }

    validarFormulario(){
        if(span[0].innerHTML != '' || span[1].innerHTML != '' || span[2].innerHTML != '' 
        || span[3].innerHTML != '' || span[4].innerHTML != '' || span[5].innerHTML != ''){
            return
        } 

        alert('Formulario enviado')
        form.submit()
    }

}

let inputUsuario = document.getElementById('usuario')
inputUsuario.addEventListener('keyup', e => {
    let c = e.key

    if(c != 'Backspace' && c != 'CapsLock' && c != 'ArrowLeft' && c != 'ArrowRight' && c != 'Enter' && c != 'Dead' && c != 'Shift' && c != 1 && c != 2 && c != 3 && c != 4 && c != 5 && c != 6 && c != 7 && c != 8 && c != 9 && c != 0 && c != 'a' && c != 'b' && c != 'c' && c!= 'd' && c != 'e' && c != 'f' && c != 'g' && c != 'h' && c != 'i' && c != 'j' && c != 'k' && c != 'l' && c != 'm' && c != 'n' && c != 'o' && c != 'p' && c != 'q' && c != 'r' && c != 's' && c != 't' && c != 'u' && c != 'v' && c != 'w' && c != 'x' && c != 'y' && c != 'z' && c != 'A' && c != 'B' && c != 'C' && c != 'D' && c != 'E' && c != 'F' && c != 'G' && c != 'H' && c != 'I' && c != 'J' && c != 'K' && c != 'L' && c != 'M' && c != 'N' && c != 'O' && c != 'P' && c != 'Q' && c != 'R' && c != 'S' && c != 'T' && c != 'U' && c != 'V' && c != 'W' && c != 'X' && c != 'Y' && c != 'Z'){
        inputUsuario.value = (inputUsuario.value).replace(c,'')
    }
})

form.addEventListener('submit', e => {
    e.preventDefault()

    let formulario = new Form()

    formulario.verificarInputVazio()
    formulario.verificarUsuario()
    formulario.verificarSenha()
    formulario.verificarCpf()
    formulario.validarFormulario()
})







