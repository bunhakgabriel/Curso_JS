import soma from './calc'
import Heading from './components/heading'
//import './components/heading.css'

console.log('Testando o webpack 2')

soma(0, 4)
soma(20, 50)

//Loaders
const heading = new Heading()

heading.create('Este título é dinâmico')