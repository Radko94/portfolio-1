const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfigClient = require('./webpack.config.client.js');
const webpackConfigServer = require('./webpack.config.server.js');

module.exports = (env, options) => {
    const sharedConfig = () => ({
        resolve: {
            alias: {
                '@client': path.resolve(__dirname, 'src/client'),
                '@server': path.resolve(__dirname, 'src/server'),
                '@env': path.resolve(__dirname, 'src/env'),
                '@store': path.resolve(__dirname, 'src/client/store'),
                '@components': path.resolve(__dirname, 'src/client/components'),
            }
        },
        devtool: options.mode === 'development' ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: [
                        path.resolve(__dirname, './node_modules'),
                    ],
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    }
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    exclude: [
                        path.resolve(__dirname, './node_modules'),
                    ],
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: '/images',
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader' },
                        { loader: 'resolve-url-loader' },
                        {
                            loader: 'sass-loader', options: {
                                sourceMap: true,
                                sourceMapContents: false
                            }
                        }
                    ]
                },
                {
                    test: /\.json$/i,
                    exclude: [
                        path.resolve(__dirname, './node_modules'),
                    ],
                    use: [
                        { loader: 'json-loader' }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            }),
        ]
    })

    return [
        merge(sharedConfig(), webpackConfigClient),
        merge(sharedConfig(), webpackConfigServer)
    ]
}