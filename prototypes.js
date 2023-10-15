function Pessoa(nome,idade){
    this.nome = nome
}

const pessoa1 = new Pessoa('João',30)

Pessoa.prototype.apresentar = function() {
    return `Olá, meu nome é ${this.nome}`
}

console.log(pessoa1.apresentar())

