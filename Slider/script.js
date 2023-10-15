let contador = 1;
let input = document.getElementsByClassName('input')

let intervalo = setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(contador > 5 ) {
        contador = 1;
    }
}, 2000000 );

document.addEventListener("click", e => {
    el = e .target

    if(el.classList.contains('input')){
        let num = (el.id.slice(-1))
        contador = num
    }
})

