//example webpack configuration file - By Nabil DADEN

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    //main app file
    entry: './server/lib/index.js',
    target: 'node', //ignore built in modules like path,fs, etc..
    externals: [nodeExternals()], //ignore all modules in node_modules folder
    output: {
        path: './server/dist/',
        filename: 'server.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/, //which files to compile
                exclude: [/node_modules/,/front/], //excluded directories
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