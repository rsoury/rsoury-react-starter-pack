import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, //Displays debug information
  devtool: 'cheap-module-eval-source-map',
  noInfo: false, //Webpack will display a list of all files it is bundling.
  entry: [ //Entry points for our application.
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web', //Could also set to node, in order for node to work with bundle instead of browser.
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: { //This is where our code is.
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin() //Keeps erros from breaking hot reload
  ],
  module: {
    loaders: [ //The types of files we want it to bundle.
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
