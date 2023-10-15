class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    // Método de instância
    aumentarVolume(){
        this.volume += 2
        console.log(controle1)
    }
    // Método de instância
    diminuirVolume(){
        this.volume -= 2
        console.log(controle1)
    }

    // Método estático
    static trocaPilha() {
        console.log('pilhas trocadas')
    }
}

const controle1 = new ControleRemoto('LG')

console.log(controle1)
controle1.aumentarVolume()

ControleRemoto.trocaPilha()

/*
class Configuracoes{

    apresentar(){ console.log('Eu sou um método da instância') }
  
    static falar(){ console.log('Eu sou um método estatico') }
  
  }
  
  const a1 = new Configuracoes()
  
  Configuracoes.falar()
  //a1.falar()
  a1.apresentar()
  */
  
