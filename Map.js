// Dobrar os numeros
//Dobre os numeros do array

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const array = numeros.map(callback)
function callback(valor){
    return valor*2
}

console.log(array)
console.log(numeros)

/*
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const array = numeros.map( valor => valor * 2 )

console.log(array)
*/