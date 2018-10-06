const path = require('path');

module.exports = {
  mode: 'development',
  entry: './v2/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './')
  }
};