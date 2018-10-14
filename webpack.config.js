const path = require('path');

module.exports = (env) => {
	return {
		mode: env || 'development',
		entry: './v6/main.js',
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, './public')
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		},
		devtool: env === 'production' ? 'source-map' : 'inline-source-maps',	
		devServer: {
			contentBase: path.join(__dirname, "public"),
			historyApiFallback: true
		}
	};
};