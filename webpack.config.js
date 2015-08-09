var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry    : "./app/App.jsx",
  output   : {
  filename : "public/bundle.js"
  },
  module   : {
    loaders  : [
      {
        test     : /\.jsx?$/,
        exclude  : /(node_modules|bower_components)/,
        loader   : 'babel'
      }
    ]
  },
  plugins  : [
    new BrowserSyncPlugin({
      host     : 'localhost',
      port     : 3000,
      server   : { baseDir: ['public'] }
    })
  ]
};
