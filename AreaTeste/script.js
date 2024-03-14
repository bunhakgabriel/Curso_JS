const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } ) 
});

const elements = document.querySelectorAll('.hidden')

elements.forEach( element => {
    myObserver.observe(element)
} )
























//Código digitação automatica
/*
let h1 = document.getElementById("titulo")


let letras = ['S','e','j','a',' ','B','e','m','-','V','i','n','d','o',' ','G','a','b','r','i','e','l']

let i = 0

const pararExecucao = (i) => {
    if(i >= letras.length){
        h1.innerText = h1.innerText.slice(0,i)
        clearInterval(escrever)
    }
}

//const str = 'Hello, world!';
//const cortada = str.slice(7, 12);
//console.log(cortada); // Saída: "world"

const escrever = setInterval(() => {

    h1.innerText = h1.innerText.slice(0,i) + letras[i] + "|" 
    i++

    let span = document.getElementById("span")
    pararExecucao(i)

}, 250)

escrever()
*/