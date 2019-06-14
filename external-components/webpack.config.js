const path = require('path');

module.exports = {
  entry: './src/MyComponent.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  externals: ['react'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'MyComponent.js',
    library: 'index',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  }
};