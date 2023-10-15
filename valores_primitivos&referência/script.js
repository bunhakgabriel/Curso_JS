/*
let teste = [10]
let teste01 = teste

teste[1] = 20

teste01[2] = 30

console.log(teste, teste01)
------------------------------*/

// passagem por valor utilizando array

// se você utilizar a sintaxe [...] não sera feita a passagem pro referência, será feita a 
// passagem por valor como ocorre nos tipos primitivos

let teste = [10]
let teste01 = [...teste]

teste[1] = 20
teste[2] = 30

console.log(teste, teste01)