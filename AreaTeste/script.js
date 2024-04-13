let cpf = '03755264986'
let num = ['0','1','2','3','4','5','6','7','8','9']
let chave = new Array
let cpfCriptografado = new Array
let cpfDescriptografado = new Array

// Array original com 20 elementos
const arrayOriginal = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Função para ordenar aleatoriamente um array e retornar os primeiros 10 elementos
function sortear10Elementos(array) {
    const arrayEmbaralhado = array.sort(() => Math.random() - 0.5);
    return arrayEmbaralhado.slice(0, 11);
}

// Sortear 10 elementos aleatórios do array original
const el = sortear10Elementos(arrayOriginal);

let c = 0
for(let e of el){
    chave.push([cpf[c],e])
    c++
}

let i = 0
for(let e of el){
    if(e == chave[i][1]) cpfDescriptografado.push(chave[i][0])
    i++
}

export default cpf