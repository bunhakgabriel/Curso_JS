var arrayCpf;
var cont1 = 11
var cont2 = 12

function ManipularCpf(valor){}

//Na primeira etapa pegamos o cpf inicial e o colocamos em um array
ManipularCpf.prototype.iniciarVerificacao = function(valor){
    arrayCpf = Array.from(valor)
    arrayCpf = arrayCpf.slice(0,9)
    arrayCpf = arrayCpf.map( valor => Number(valor) )
    cpf.segundaEtapa(arrayCpf)
}

//Na segunda etapa vamos descobrir qual é o décimo digito do cpf informado
ManipularCpf.prototype.segundaEtapa = function(valor){
    primeiroDigito = valor.reduce(function(acumulador,vlr){
        cont1--
        return acumulador += vlr*(cont1)
     },0)

     primeiroDigito = 11 - (primeiroDigito % 11)
     if(primeiroDigito > 9){ primeiroDigito = 0 }
     arrayCpf.push(primeiroDigito)
     cpf.terceiraEtapa(arrayCpf)
}

//Na terceira etapa vamos descobrir qual é o décimo primeiro digito do cpf informado
ManipularCpf.prototype.terceiraEtapa = function(valor){
    segundoDigito = valor.reduce(function(acumulador,vlr){
        cont2--
        return acumulador += vlr*(cont2)
     },0)

     segundoDigito = 11 - (segundoDigito % 11)
     if(segundoDigito > 9){ segundoDigito = 0 }
     arrayCpf.push(segundoDigito)
     cpf.quartaEtapa(arrayCpf)
}

ManipularCpf.prototype.quartaEtapa = function(valor){
    this.cpfFinal = (valor.toString()).replace(/[^0-9]/g,'')
    if(cpf.cpfInicial === cpf.cpfFinal){
        console.log(`O CPF ${cpf.cpfInicial} É VÁLIDO`)
    } else {
        console.log(`O CPF ${cpf.cpfInicial} É INVALIDO`)
    }
}

function ReceberCpf(valor){
    this.cpfInicial = valor.replace(/[^0-9]/g,'')

    ManipularCpf.call(this,this.cpfInicial)
}
ReceberCpf.prototype = Object.create(ManipularCpf.prototype)

const cpf = new ReceberCpf()

cpf.iniciarVerificacao(cpf.cpfInicial)

