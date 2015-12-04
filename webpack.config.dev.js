var webpack = require('webpack');
var cleanWebpack = require('clean-webpack-plugin');

var ignore = new webpack.IgnorePlugin(new RegExp("/ckeditor/"))

module.exports = {  
  devtool: 'inline-source-map',
  entry: {[
    './lib/client/entry'
  ],
  './public/css'
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'app.js',
    publicPath: 'http://localhost:8081/js/',
  },
  plugins: [
    ignore,
    new webpack.NoErrorsPlugin(),
   // new cleanWebpack(['lib'])
  ],
  resolve: {
    extensions: ['', '.js']
  },
  watchOptions: {
    poll: false,
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loaders: ['react-hot', 'babel-loader?experimental'], 
        exclude: /(node_modules|ckeditor)/,
      },
      // LESS
      {
        test: /\.less$/,
        loader: "css-loader!less-loader"
      }
    ]
  }
}