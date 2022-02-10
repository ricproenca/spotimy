const Dotenv = require('dotenv-webpack');

module.exports = () => ({
  // How source maps are generated.
  devtool: 'inline-source-map',

  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // Does a find/replace in the bundle for any instances of process.env.
    new Dotenv()
  ]
});
