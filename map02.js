// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const arrayNome = pessoas.map(function(valor){
    return valor.nome
})

const chaveNome = pessoas.map(function(valor){
    //primeiro método -> 
    return {idade: valor.idade}
    //segundo método ->
    //delete valor.nome
    //return valor
})

const chaveId = pessoas.map(function(valor,indice){
    const newObject = {...valor}
    newObject.id = indice
    return newObject
})

console.log(arrayNome)
console.log(chaveNome)
console.log(chaveId)
console.log(pessoas)


