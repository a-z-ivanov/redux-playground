const path = require('path');

module.exports = {
  mode: 'development',
  entry: './v3/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './')
  }
};