const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "build/js/[name].js",
        pathinfo: true,
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: "/node_modules"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('public/index.html'),
        })
    ],
    devServer: {
        hot: true,
        port: "8080",
    }
}