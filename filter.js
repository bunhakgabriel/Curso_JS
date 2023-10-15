const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const numerosFiltrados = numeros.filter(callbackFilter)

/*
function callbackFilter(valor,indice,array){
    if(valor > 10){
        return true
    } else{
        return false
    }
}

console.log(numerosFiltrados)
*/

//Essa função acima é valida, contudo ela ficou muito extensa
//A funcção callbackFilter precisa retornar um valor true para que o elemento da condição seja 
//adicionado ao novo array
//não precisamos necessariamente escrever "return true" pois a própria condição ira retornar "true" 
//se ela for verdadeira, se não for verdadeira ela retorna false

//Veja o exemplo abaixo, funciona perfeitamente com menos linhas de código

function callbackFilter(valor){
    return valor > 10
}

console.log(numerosFiltrados)

//Nesse caso nós só estamos usando o parâmetro "valor", então não é necessario colocar os parâmetros
//"indice" e "array" na função de callback