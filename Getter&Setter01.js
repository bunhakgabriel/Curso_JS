const pessoa = {
    nome: 'João',
    sobrenome: 'Souza',
    curso: 'Lógica de programação',
    get saudacao(){
       return console.log('Bom dia ' + this.nome + ' ' + this.sobrenome)
    }
}

pessoa.saudacao
console.log('')

const pessoa1 = {
    nome: null,
    sobrenome: 'Souza',
    curso: 'Lógica de programação',
    set nomePessoa(nomePessoa){
       this.nome = nomePessoa
    }
}

console.log(pessoa1.nome)
pessoa1.nomePessoa = 'joao'
console.log(pessoa1.nome)

