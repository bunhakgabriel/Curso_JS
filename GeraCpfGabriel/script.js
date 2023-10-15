class gerarCPF{
    
    gerarCpfParcial(){
        const cpfParcial = Math.trunc(Math.random() * (999999999 - 100000000 + 1) + 100000000)
        return Array.from(cpfParcial.toString())
    }

    gerarCpfFinal(cpfArray){
        let cont = cpfArray.length + 2
        let digito = cpfArray.reduce((acumulador,vlr) => {
            cont --
            return acumulador += Number(vlr) * cont
        },0)

        digito = 11 - (digito % 11)
        if(digito > 9){ digito = 0 }
        cpfArray.push(digito)
        
        if(cpfArray.length < 11){ this.gerarCpfFinal(cpfArray) }
        return (cpfArray.toString()).replace(/[^0-9]/g,'') 
    }

    novoCPF(){
        const cpfParcial = this.gerarCpfParcial()
        const cpfFinal = this.gerarCpfFinal(cpfParcial)
        return  cpfFinal.slice(0,3)+'.'+cpfFinal.slice(3,6)+'.'+cpfFinal.slice(6,9)+'-'+cpfFinal.slice(9,11)
    }
}

const cpf = new gerarCPF()
const resp = document.getElementById('resp')
resp.innerHTML = cpf.novoCPF()
