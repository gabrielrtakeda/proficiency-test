'use strict';

var path = require('path');
var paths = {
  app: path.join(__dirname, 'app', 'assets', 'src'),
  dist: path.join(__dirname, 'app', 'assets', 'dist'),
  node_modules: path.join(__dirname + '/node_modules')
};

module.exports = {
  cache: true,
  context: paths.app,
  entry: path.join(paths.app + '/entry.js'),
  output: {
    path: paths.dist,
    filename: 'webpack.bundle.js',
    publicPath: '/',
    sourceMapFilename: "webpack.bundle.map"
  },
  resolve: {
    alias: {
      'bootstrap-datetimepicker-css': paths.node_modules + '/angular-bootstrap-datetimepicker/src/css/datetimepicker.css',
      'bootstrap-datetimepicker-js': paths.node_modules + '/angular-bootstrap-datetimepicker/src/js/datetimepicker.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      }, {
        test: /\.js$/,
        loader: 'ng-annotate!babel?presets[]=es2015!jshint',
        exclude: /node_modules|bower_components/
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader: 'file-loader?name=res/[name].[ext]?[hash]'
      }, {
        test: /\.html$/,
        loader: 'raw'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }, {
        test: /bootstrap\/js\//,
        loader: 'imports?$=jquery'
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }, {
        test: /\.svg$/,
        loader: "svg"
      }
    ]
  }
};
