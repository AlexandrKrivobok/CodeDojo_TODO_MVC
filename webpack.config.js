const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
  },

  mode: 'development',

  devServer: {
    static: path.join(__dirname, 'public'),
  },
};