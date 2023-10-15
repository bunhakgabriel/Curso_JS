const pessoa = {
    nome: 'gabriel',
    sobrenome: 'bunhak',
    idade: '21'
}

Object.defineProperties(pessoa, {
    nome: { writable: false },
    sobrenome: { writable: true },
    idade: { writable: true }
})

pessoa.nome = 'andre'
pessoa.sobrenome = 'camargo'
pessoa.idade = '25'

console.log(pessoa)

console.log(Object.getOwnPropertyDescriptor(pessoa,'nome'))