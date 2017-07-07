const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devServer:{
    publicPath: '/public',
    historyApiFallback: true
  },
  resolve:{
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors:true,
    reasons: true,
    chucks:true
  },
  module: {
    rules:[
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
      loader: 'babel-loader'
      }
    ]
  }
};
