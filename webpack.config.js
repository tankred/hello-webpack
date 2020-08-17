const path = require('path');

module.exports = {
  mode: "development", // could be "production" as well
  entry: {
    app: './src/main.js', 
    print: './src/print.js',
  }, 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  },
};
