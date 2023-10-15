class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Gabriel', 'Bunhak')

p1.falar()

//O método falar() foi linkado automaticamente no prototype do objeto e da classe