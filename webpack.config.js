module.exports = {
  entry: './js/index.js',
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'main.js',
    sourceMapFilename: "./[name].js.map",
  }
};