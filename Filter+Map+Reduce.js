//Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const resultado = numeros.filter(function(valor){
    return valor % 2 === 0
}).map(function(valor){
    return valor * 2
}).reduce(function(acumulador,valor){
    acumulador = acumulador + valor
    return acumulador
}, 0)

console.log(resultado)

//Simplificando o código com arroy function temos:

const resultado01 = numeros
    .filter( valor => valor % 2 === 0 )
    .map( valor => valor * 2 )
    .reduce( (ac,valor) => ac = ac + valor, 0 )

console.log(resultado01)
    
//Ou também:

const resultado02 = numeros.filter( valor => valor % 2 === 0 ).map( valor => valor * 2 ).reduce( (ac,valor) => ac = ac + valor, 0 )

console.log(resultado02)