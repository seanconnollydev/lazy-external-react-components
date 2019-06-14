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
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'MyComponent.js'
  }
};