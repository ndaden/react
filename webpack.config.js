//example webpack configuration file - By Nabil DADEN

const webpack = require('webpack');

module.exports = {
    //main app file
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/, //which files to compile
                exclude: /node_modules/, //excluded directories
                loader: 'babel-loader' //loader to use
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //set NODE_ENV
            }
        }),
        new webpack.optimize.UglifyJsPlugin() //minify JS
    ]
};