const path = require('path');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = ({
    target: 'node',
    entry: path.resolve(__dirname, 'src/server/index.js'),
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ],
    externals: [webpackNodeExternals()]
})