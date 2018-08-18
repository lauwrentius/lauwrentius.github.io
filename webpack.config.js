const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractCSS = new ExtractTextPlugin('css/style.css');
const extractHTML = new ExtractTextPlugin('index.html')

module.exports = {
  devServer: {
    hot: true
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.ejs$/,
      //   loader: 'ejs-loader',
      // },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //         loader: "file-loader"
      //     },
      //     {
      //       loader: "extract-loader",
      //     },
      //     {
      //     loader: 'html-loader',
      //     options: {
      //       interpolate: true,
      //       minimize: true,
      //       removeComments: false,
      //       collapseWhitespace: false
      //     }
      //   }],
      // },
      // {
      //   test: /\.html$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]'
      //     }
      //   }]
      // },
      // {
      //   test: /\.pug$/,
      //   use: extractHTML.extract({
      //     use: ['html-loader', 'pug-html-loader?pretty&exports=false']
      //   })
      // },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      },
      {

      }
    ]
  },
  plugins: [
    extractCSS,
    // new OptimizeCssAssetsPlugin({
    //       assetNameRegExp: /\.optimize\.css$/g,
    //       cssProcessor: require('cssnano'),
    //       cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
    //       canPrint: true
    //     }),
    new HtmlWebpackPlugin({
      template: './src/main.html.ejs'
    })
  ]
};
