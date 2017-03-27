const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: {
    home: resolve(__dirname, 'web', 'home', 'index.js'),
    about: resolve(__dirname, 'web', 'about', 'index.js'),
  },
  output: {
    path: resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {test: resolve(__dirname, 'web'), use: 'babel-loader'},
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};