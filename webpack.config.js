const path = require('path')
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/')
	},
	devServer: {
		hot: true
	}
}