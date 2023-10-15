function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}        

const p1 = new Produto('Camiseta', 50)

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2,p1)

p2.desconto(50)
console.log(p2)

const p3 = Object.create(p1, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Blusa'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 80
    }
})

p3.aumento(50)
console.log(p3)