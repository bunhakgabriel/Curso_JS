/*
function* geradora1(){
    //código qualquer ...
    yield 'valor 1'
    //código qualquer ...
    yield 'valor 2'
    //código qualquer ...
    yield 'valor 3'
}

const g1 = geradora1()
*/

/*
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().done)
*/

/*
for(let valor of g1){
    console.log(valor)
}
*/


//looping com funções geradoras

/*
function* geradora2(){
    var x = 0
    while(x < 10){
        yield x
        x++
    }
}

const g2 = geradora2()

while(g2.next().done === false){
    console.log(g2.next().value)
}
*/

function* geradora3(){
    yield 0
    yield 1
}

function* geradora4(){
    yield* geradora3()
    yield 2
    yield 3
    yield 4
}

const g4 = geradora4()

for(let retorno of g4){
    console.log(retorno)
}

