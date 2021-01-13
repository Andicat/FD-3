const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: 'bundle.css'
});

module.exports = {
    entry: './App.js', // основной файл приложения
    output:{ 
        path: __dirname, // путь к каталогу выходных файлов
        filename: 'bundle.js'  // название создаваемого файла 
    },
    devServer: {
        overlay: true,
        open: true
    },
    devtool:'source-map',
    module:{ 
        rules:[
            { 
                test: /\.js$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: extractCSS.extract({
                    use: ['css-loader',{
                        loader: "sass-loader",
                        options: {
                            minimize: false,
                        }}
                    ]
                })
            },
        ] 
    },
    plugins: [
        extractCSS
    ]
}