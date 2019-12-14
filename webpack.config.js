const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
 
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
        test: /style\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /editor\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        blockStyles: {
          name: 'block.styles',
          test: /style\.scss$/,
          chunks: 'all',
          //filename: '[name].css',
          //reuseExistingChunk: true,
          enforce: true
        },
        editorStyles: {
          name: 'editor.styles',
          test: /editor\.scss$/,
          chunks: 'all',
          //filename: '[name].css',
          //reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      //chunkFilename: 'chunk-[id][name].css',
      chunkFilename: './assets/css/[name].css',
    }),
    new IgnoreEmitPlugin(/styles\.js$/) // ignore extra emitted JS files from the CSS extraction process (shouldn't need to do this in webpack 5!)
  ],
};