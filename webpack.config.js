const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = (env) => ({
    mode: env === 'prod' ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './app.js',
        publicPath: '/'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    plugins: [
        new LiveReloadPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: 'file-loader'
            }]
    }
})