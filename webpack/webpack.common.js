const webpack = require('webpack');
const Path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(Path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        const ejs = parts[2];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: Path.resolve(__dirname, `${templateDir}/${name}.${extension}.${ejs}`)
        })
    })
}

const htmlPlugins = generateHtmlPlugins('../src/html/views');

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/js/main.js')
    },
    output: {
        path: Path.join(__dirname, '../build'),
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: Path.resolve(__dirname, '../public'),
                to: 'public'
            },
            {
                from: Path.resolve(__dirname, '../src/img'),
                to: './img'
            }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ].concat(htmlPlugins),
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};
