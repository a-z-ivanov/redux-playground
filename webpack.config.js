const path = require('path');

module.exports = {
  mode: 'development',
  entry: './v1/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './v1')
  }
};