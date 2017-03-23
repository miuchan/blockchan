'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../src/index')
  ],
  vendor: [
    'core-js',
    'moment',
    'react',
    'react-router',
    'react-dom',
    'redux',
    'react-redux',
    'material-ui',
    'core-js'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", 'vendor.bundle.js'),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
