let pessoa = {

    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,

    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }

}

let { nome:teste ,sobrenome } = pessoa

console.log(nome)
console.log(sobrenome)