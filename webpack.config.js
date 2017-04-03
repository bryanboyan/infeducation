const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
  entry: {
    home: resolve(__dirname, 'web', 'home', 'index.js'),
    about: resolve(__dirname, 'web', 'about', 'index.js'),
    classes: resolve(__dirname, 'web', 'classes', 'index.js'),
    polyfill: resolve(__dirname, 'polyfill.js'),
  },
  output: {
    path: resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015', 'stage-2', 'react']}
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    })
  ]
};
