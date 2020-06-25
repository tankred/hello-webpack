const path = require('path');

module.exports = {
  mode: "development", // could be "production" as well
  entry: './src/main.js', 
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js' 
  }
};
