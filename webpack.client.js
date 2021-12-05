const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base, {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'client.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1,
                          esModule: false,
                          modules: {
                              localIdentName: '[name]_[local]_[hash:base64:5]'
                          }
                        }
                    }
                ]
            }
        ]
    }
})