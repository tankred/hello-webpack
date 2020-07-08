const path = require('path');

module.exports = {
  mode: "development", // could be "production" as well
  entry: './src/main.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js' 
  },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
         ],
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
     ],
   },
};
