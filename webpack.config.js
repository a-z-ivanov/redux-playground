const path = require('path');

module.exports = {
	target: 'web',
	mode: 'development',
	entry: './v3/main.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './public')
	},
	devServer: {
		contentBase: path.join(__dirname, "/public")
	}
};