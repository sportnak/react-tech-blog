var webpack = require('webpack');
var cleanWebpack = require('clean-webpack-plugin');

var ignore = new webpack.IgnorePlugin(new RegExp("/ckeditor/"))

module.exports = {  
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8081',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8081/js/',
  },
  plugins: [
    ignore,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new cleanWebpack(['lib'])
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loaders: ['react-hot', 'babel-loader?experimental'], 
        exclude: /(node_modules|ckeditor)/ 
      }
    ]
  }
}