module.exports = {
  entry: './app/entry.jsx',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    loaders: [{
      include: /app/,
      loader: 'babel',
      test: /\.jsx$/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
