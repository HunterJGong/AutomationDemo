/*
    This class is passed as a requirement to the webpack task in gulpfile.js
*/

module.exports = {
  entry: './src/ts/main.ts',
  output: {
    filename: 'app.bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}