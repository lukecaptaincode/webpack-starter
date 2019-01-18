const path = require('path');
//Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackDashboard = require('webpack-dashboard/plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        open: 'Chrome'
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8000', delay: 5000}),//wait for dashboard
        //new CopyWebpackPlugin([ { from: './src/assets', to: './assets'} ]),//Copies assets over
        new webpackDashboard(),
    ]
});