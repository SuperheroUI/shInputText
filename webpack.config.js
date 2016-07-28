var path = require('path');
var outputPath = path.join(__dirname, 'example');

module.exports = {
  entry: './example/App.js',
  output: {
    path: './example/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
