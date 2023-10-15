var minusculas = 'abcdefghijklmnopqrstuvwxyz'
var maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numeros = '1234567890'
var simbolos = '@$*-_/.^|=&()'

let senha = ''

function gerarString(tamanho){
  for(let i = 0; i < tamanho; i++){
     senha += minusculas.charAt(Math.floor(Math.random() * (25 - 0 + 1) + 0))
     tamanho--

      if(i < tamanho){
        senha += maiusculas.charAt(Math.floor(Math.random() * (25 - 0 + 1) + 0))
        tamanho--
      }

      if(i < tamanho){
        senha += numeros.charAt(Math.floor(Math.random() * (9 - 0 + 1) + 0))
        tamanho--
      }

      if(i < tamanho){
        senha += simbolos.charAt(Math.floor(Math.random() * (12 - 0 + 1) + 0))
      }
  }
  return senha
}

console.log(gerarString(17))

