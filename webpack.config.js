const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/js'
  },

  mode: 'development',

  devServer: {
    static: path.join(__dirname, 'public'),
  },

  // devtool: 'cheap-eval-source-map' // remove for build
};