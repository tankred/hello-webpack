const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development", // could be "production" as well
  entry: {
    app: './src/main.js', 
//    print: './src/print.js',
//    another: './src/another-module.js',
//     index: { import: './src/main.js', dependOn: 'shared' },
//     another: { import: './src/another-module.js', dependOn: 'shared' },
//     shared: 'lodash',
  }, 
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new webpack.ProvidePlugin({
       _: 'lodash',
     }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), 
    publicPath: '/',
  },
  //    optimization: {
  //      splitChunks: {
  //        chunks: 'all',
  //      },
  //    },
};
