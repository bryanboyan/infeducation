const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'web', 'app-client.js'),
  output: {
    path: resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js',
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