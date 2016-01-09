var path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  }
};
