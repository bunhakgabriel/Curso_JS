//Some todos os numeros
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const somaTotal = numeros.reduce(function(acumulador,valor,indice){
    if(valor % 2 === 0){acumulador = acumulador + valor}
    return acumulador
}, 0)

console.log(somaTotal)