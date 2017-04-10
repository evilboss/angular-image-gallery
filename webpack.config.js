const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const DEBUG = process.env.npm_lifecycle_event !== 'build';

const config = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: './dist',
    publicPath: DEBUG ? 'http://localhost:8080/' : '/',
    filename: 'js/[name].[hash].js',
    devtoolModuleFilenameTemplate(info) {
      return `webpack:///${encodeURI(info.resourcePath.replace('webpack://', '.'))}`;
    },
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', `css?sourceMap!resolve-url!${!DEBUG ? 'postcss!' : ''}sass?sourceMap`
        ),
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url',
        query: {
          name: 'fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf$|\.eot$/,
        loader: 'file',
        query: {
          name: 'fonts/[hash].[ext]',
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file',
        query: {
          name: 'assets/[hash].[ext]',
        },
      },
      { test: /\.html$/, loader: 'html' },
    ],
  },
  sassLoader: {
    data: '@import "mixins.scss";\n',
    includePaths: './src/styles',
  },
  postcss() { return [autoprefixer]; },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new ExtractTextPlugin('styles/[name].[hash].css', { disable: DEBUG }),
  ],
  devtool: DEBUG ? 'inline-source-map' : '',
};

if (!DEBUG) {
  config.plugins.push(
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  );
} else {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;
