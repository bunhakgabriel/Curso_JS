let button = document.getElementById('btn')
let resp = document.getElementById('resp')

class senha{
    constructor(){
        this.number = document.getElementById('numeros').checked
        this.maiusc = document.getElementById('maiusc').checked
        this.minusc = document.getElementById('minusc').checked
        this.simbolo = document.getElementById('simbolo').checked
        this.tamanho = Number(document.getElementById('qtd-Char').value)
    }

    init(){
        let minusculas = 'abcdefghijklmnopqrstuvwxyz'
        let maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numeros = '1234567890'
        let simbolos = '@$*-_/.^|=&()'
        let senha = ''

        for(let i = 0; i <= this.tamanho; i++){
            i = 0

            if(i < this.tamanho && this.number){
            senha += numeros.charAt(Math.floor(Math.random() * (9 - 0 + 1) + 0))
                this.tamanho--
            }

            if(i < this.tamanho && this.maiusc){
                senha += maiusculas.charAt(Math.floor(Math.random() * (25 - 0 + 1) + 0))
                this.tamanho--
            }

            if(i < this.tamanho && this.minusc){
                senha += minusculas.charAt(Math.floor(Math.random() * (25 - 0 + 1) + 0))
                this.tamanho--
            }

            if(i < this.tamanho && this.simbolo){
                senha += simbolos.charAt(Math.floor(Math.random() * (12 - 0 + 1) + 0))
                this.tamanho--
            }
        }
        return senha

    }

    eventos(){
        if(!this.number && !this.maiusc && !this.minusc && !this.simbolo){ 
            resp.innerHTML = 'Nada selecionado' 
            return
        }
        resp.innerHTML = this.init()
    }
}

button.addEventListener('click', () => {
    const gerarSenha = new senha()
    gerarSenha.eventos()
})

