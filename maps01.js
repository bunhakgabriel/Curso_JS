// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const arrayNome = pessoas.map( (valor) => {
    return valor.nome
})

const removeChaveNome = pessoas.map( (valor) => {

    return { idade: valor.idade}
    //ou também -> delete valor.nome ,return valor
    
})

const addChaveId = pessoas.map( (valor,indice) => {
    // return {nome: valor.nome, idade: valor.idade, id: indice} -> forma mais dificil, mas funciona

    valor.id = indice  //forma mais simples, nesse caso o ID vai ser o indice de cada elemento
    return valor

})

console.log(arrayNome)
console.log(removeChaveNome)
console.log(addChaveId)