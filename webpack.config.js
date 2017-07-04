const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "style.css",
  disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: './src/sass/main.sass',
  output: {
    filename: 'style.css',
    path: path.resolve(__dirname, 'dist/css')
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass
  ],
  devtool: 'source-map'
};