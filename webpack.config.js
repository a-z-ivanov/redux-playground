const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './')
  }
};