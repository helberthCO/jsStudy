// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/js/main.js',
  output: {
    // eslint-disable-next-line no-undef
    path: __dirname + '/dist/js',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};