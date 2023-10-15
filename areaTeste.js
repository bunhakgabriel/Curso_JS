function rand(min = 0, max = 3){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min) 
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(typeof msg !== 'string') {
              reject('CAI NO ERRO')
              return
          }
      
      resolve(msg.toUpperCase() + ' - Passei na promise')
      return
   } , tempo)
  })
}

async function executa(){

  const fase1 = await esperaAi('Fase1', rand())
  console.log(fase1)

  const fase2 = await esperaAi('Fase2', rand())
  console.log(fase2)

  const fase3 = await esperaAi('Fase3', rand())
  console.log(fase3)

  const fase4 = await esperaAi('Fase4', rand())
  console.log(fase4)
    
}

executa()

console.log('teste')