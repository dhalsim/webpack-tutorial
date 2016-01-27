var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('js'),
  entry: "./app.js",
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true
  },
  module: {
  	loaders: [
  		{
        loader: 'babel-loader',
  			test: /\.js$/,
        include: [
          path.resolve(__dirname, 'js')
        ]
  		}
  	]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
