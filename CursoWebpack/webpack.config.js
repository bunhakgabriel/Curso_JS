const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//os plugins servem para resolvermos algum problema na nossa aplicação,
//no nosso caso os styles css estão sendo carregados dentro da tag head do body,
//por isso vamos usar um plugin para que o css seja carregado em um arquivo separado,
//Se você nao usar o plugin basta ir no console do navegador e ver que os estilos estao sendo carrgados no body
//Também é preciso instala-lo pelo npm, npm i mini-css-extract-plugin
//esse plugin é especifico para resolver esse problema
const HtmlWebpackPlugin = require('html-webpack-plugin') //Pesquisar sobre o funcionamento desse plugin, também é necessario instala-lo pelo npm, npm install html-webpack-plugin

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development', //Nós sempre usamos mode:development nos nossos projetos, ele serve para deixar o arquivo bundle.js mais legivel, para que possamos debuga-lo(encontrar erros) se necessario
    devServer: { //Configuração do webpack-dev-server
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader' //Precisamos desses dois loaders para poder carregar arquivos css, 'css-loader' vai identificar os arquivos css, 'style-loader' vai transformar esses arquivos en stylo de fato, os dois precisam estar nessa ordem que foram escritos
                    //Como esses loaders são pacotes, precisamos instala-los pelo npm
                    //npm install --save-dev style-loader css-loader    
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ //Esse plugin vai gerar um arquivo css 
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
}

