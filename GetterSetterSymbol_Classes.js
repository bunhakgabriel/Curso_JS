/*
const _velocidade = Symbol('velocidade')

class Carro {
  constructor(nome){
    this.nome = nome,
    this[_velocidade] = 0
  }

  acelerar(){
    if(this[_velocidade] >= 100) return
    this[_velocidade]++
    console.log(c1)
  }

  freiar(){
    if(this[_velocidade] <= 0 ) return
    this[_velocidade]--
    console.log(c1)
  }

}
const c1 = new Carro('civic')
console.log(c1)
c1._velocidade = 150
console.log(c1)
*/

const _velocidade = Symbol('velocidade')

class Carro {
  constructor(nome){
    this.nome = nome,
    this[_velocidade] = 0
  }

  get velocidade(){
    console.log('GETTER')
    return this[_velocidade]
  }

  set velocidade(valor){
    console.log('SETTER')
    if(typeof valor !== 'number') return
    if(valor >= 100 || valor <= 0) return
    this[_velocidade] = valor
  }

  acelerar(){
    if(this[_velocidade] >= 100) return
    this[_velocidade]++
    console.log(c1)
  }

  freiar(){
    if(this[_velocidade] <= 0 ) return
    this[_velocidade]--
    console.log(c1)
  }

}
const c1 = new Carro('civic')
console.log(c1)
c1.velocidade = 150
console.log(c1)
c1.acelerar(), c1.acelerar()

console.log(c1.velocidade)

c1.velocidade = 90
console.log(c1)
c1.freiar()
