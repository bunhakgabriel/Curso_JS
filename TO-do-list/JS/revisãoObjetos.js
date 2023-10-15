const pessoa = {
    nome: 'gabriel',
    sobrenome: 'bunhak',
    idade: '21'
}

Object.defineProperty(pessoa, 'sobrenome', {
    writable: false // writable = pode alterar o valor
})

pessoa.sobrenome = 'camargo'

console.log(pessoa.sobrenome)