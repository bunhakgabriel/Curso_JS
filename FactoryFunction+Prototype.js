function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome
    }

}

const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
}
const pessoaPrototype = Object.assign({}, falar)

const p1 = criaPessoa('Gabriel','Bunhak')

p1.falar()