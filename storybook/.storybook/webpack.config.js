module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}

