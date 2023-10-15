/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)


// já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

/* Copiando valor de um objeto com spred operator

const produto1 = { nome: 'camiseta', valor: 19.99 }
const produto2 = {...produto1}

produto2.estoque = 15

console.log(produto1)
*/

/* Copiando valor de um objeto com Object.assign()

const produto1 = { nome: 'camiseta', valor: 19.99 }
const produto2 = Object.assign({}, produto1)

console.log(produto2)
*/

/* Congelando um objeto com Object.freeze()

const produto1 = { nome: 'camiseta', valor: 19.99 }
Object.freeze(produto1)
produto1.estoque = 15

console.log(produto1)
*/

/* vizualizar descritor de uma propriedade

const produto1 = { nome: 'camiseta', valor: 19.99 }
console.log(Object.getOwnPropertyDescriptor(produto1, 'nome'))
*/

const produto1 = { nome: 'camiseta', valor: 19.99 }
//console.log(Object.entries(produto1))

for(let [chave,valor] of Object.entries(produto1)){
    console.log(chave,valor)
}


