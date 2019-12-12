const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
  entry: {
    './assets/js/editor.blocks' : './blocks/index.js'
  },
  output: {
    path: path.resolve( __dirname ),
    filename: '[name].js',
  },
  watch: 'production' !== process.env.NODE_ENV,
  module: {
    rules: [
      {
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/css/[name].blocks.css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}     
    ]
  }
};
