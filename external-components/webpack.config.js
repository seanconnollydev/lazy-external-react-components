const path = require('path');

module.exports = {
  mode: 'development',
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
    globalObject: 'this',
    publicPath: 'https://external-components.goldenshun.now.sh/dist/'
  }
};