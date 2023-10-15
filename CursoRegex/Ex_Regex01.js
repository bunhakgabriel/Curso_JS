var cep = '01234-050'
var expression = /^[0-9]{5}-[0-9]{3}$/

// g - global
// i - case sensitive
// m - multiline

function obterCepValido(str){
   return expression.test(str)
}

console.log(obterCepValido(cep))
