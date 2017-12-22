const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./app/css/styles.css');

//module.exports convierte nuestro JSX de App.js en JS puro con BABEL-LOADER y lo pasa a build/transformed.js con su respectivo index.html
module.exports = {
    entry: __dirname + '/src/index.jsx',
    module:{
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { //cargamos los presets que pre-instalados
                  presets:['es2015','react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }

            ]

    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/app/js'
    },
    plugins: [extractCSS]
};