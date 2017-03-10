//example webpack configuration file - By Nabil DADEN

const webpack = require('webpack');

module.exports = {
    //main app file
    entry: './front/main.jsx',
    output: {
        path: 'front/static/js',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.jsx$/, //which files to compile
                exclude: [/node_modules/,/server/], //excluded directories
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