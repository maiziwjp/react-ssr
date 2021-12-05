const path = require('path');
// 不让webpck把node的核心模块打包进来
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base, {
    target: 'node', // 告诉webpack打包的目标环境，比如node/浏览器
    entry: './src/server/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'server.js'
    },
    // 检测所有引入的核心模块，并且告诉webpack不要把核心模块打包到server.js中去
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
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