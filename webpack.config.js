const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './dist/index.js',
  output: {
    filename: 'bundle/app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
