/*
let carro = {

    marca: 'honda',
    cor: 'prata',
    ano: '2015',
    nome: 'civic'

}

console.log(`Você tem um ${carro.marca} ${carro.nome} ${carro.cor} ${carro.ano}`)
*/

function criaCarro(m,n,c,a){
    return{
        marca: m,
        nome: n,
        cor: c,
        ano: a
    }

}

let carro1 = criaCarro('honda','civic','prata','2015')
let carro2 = criaCarro('fiat','uno','vermelho','2002')
let carro3 = criaCarro('honda','fit','branco','2018')
let carro4 = criaCarro('ford','ka','preto','2012')
let carro5 = criaCarro('hyundai','veloster','branco','2022')

let texto = {
   resposta(){ 
    console.log(`Você tem um ${carro5.marca} ${carro5.nome} ${carro5.cor} ${carro5.ano}`)
   }
}

texto.resposta()