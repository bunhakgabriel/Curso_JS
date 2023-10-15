class Metodos{
    constructor(cpf){
        this.cpfInicial = cpf.replace(/[^0-9]/g,'')
        this.cpfArray = (Array.from(this.cpfInicial)).slice(0,9)
    }

    verificarCpf(){
        let cont = this.cpfArray.length + 2
        
        let digito = this.cpfArray.reduce((acumulador,vlr) => {
            cont --
            return acumulador += Number(vlr) * cont
        },0)

        digito = 11 - (digito % 11)
        if(digito > 10){ digito = 0 }
        this.cpfArray.push(digito)

        if(this.cpfArray.length < 11){ this.verificarCpf() }
        
        return (this.cpfArray.toString()).replace(/[^0-9]/g,'') 
    }
}

class ReceberCpf extends Metodos{
    constructor(cpf){
        super(cpf)
        this.cpfFinal = this.verificarCpf()
    }
}

const cpf = new ReceberCpf('120.947.179-50')

if(cpf.cpfInicial === cpf.cpfFinal){
    console.log('CPF VERIFICADO')
} else {
    console.log('CPF NÃO VERIFICADO')
}

