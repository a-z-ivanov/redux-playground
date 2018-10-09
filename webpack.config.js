const path = require('path');

module.exports = {
	target: 'web',
	mode: 'development',
	entry: './v4/main.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './public')
	},
	devServer: {
		contentBase: path.join(__dirname, "/public")
	}
};