const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { merge } = require('webpack-merge');

const paths = require('./helpers/paths');
const modeConfiguration = env => require(`./webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  // eslint-disable-next-line no-console
  console.log(`=== MODE: ${mode} ===\n`);

  return merge(
    {
      // Options for webpack-dev-server
      devServer: {
        compress: true,
        hot: true,
        open: true,
        port: 3000,
        historyApiFallback: true
      },

      // Entry point used to start building the bundle
      entry: ['@babel/polyfill', paths.appEntry],

      mode, // Provide the mode to operate ["development", "production"]

      // Determine how modules within the project are treated
      module: {
        rules: [
          // JavaScript: Use Babel to transpile JavaScript files
          {
            exclude: /node_modules/,
            test: /\.(js|jsx)$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },

          // Images: Copy image files to build folder
          { test: /\.(?:ico|gif|png|jpg|jpeg|pdf)$/i, type: 'asset/resource' },

          // Fonts and SVGs: Inline files
          { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' }
        ]
      },

      // How and where webpack should output the bundle, assets, ...
      output: {
        clean: true, // Clean the output directory before emit
        filename: '[name].bundle.js', // Name of each output bundle.
        path: paths.appDist, // Output directory
        publicPath: '/' // Public URL of the output directory
      },

      plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // Generates an HTML file from a template
        new HtmlWebpackPlugin({
          favicon: paths.appFavicon,
          filename: 'index.html',
          manifest: paths.appManifest,
          template: paths.appTemplate,
          title: 'Ricky React Boilerplate 2021'
        }),

        // Generate an asset manifest file which contains a mapping of all asset filenames
        new WebpackManifestPlugin({
          fileName: 'asset-manifest.json',
          publicPath: '/'
        }),

        // Visualize size of webpack output files with an interactive zoomable treemap.
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: paths.appBundleAnalyze
        })
      ],

      // Configure how modules are resolved.
      resolve: {
        // Import modules easily.
        alias: {
          '@Api': paths.appCode.Api,
          '@Assets': paths.appCode.Assets,
          '@Components': paths.appCode.Components,
          '@Config': paths.appCode.Config,
          '@Hooks': paths.appCode.Hooks,
          '@Layout': paths.appCode.Layout,
          '@Pages': paths.appCode.Pages,
          '@Providers': paths.appCode.Providers,
          '@Routes': paths.appCode.Routes,
          '@Services': paths.appCode.Services,
          '@Store': paths.appCode.Store,
          '@Templates': paths.appCode.Templates,
          '@Tests': paths.appCode.Tests,
          '@Utils': paths.appCode.Utils
        },
        extensions: ['html', '.jsx', '.js', '.json', '.css', '.scss', '.jpg', 'jpeg', 'png', 'svg', 'pdf'], // Resolve these extensions in order
        modules: [paths.appSrc, paths.appNodeModules] // Directories to resolve
      }
    },

    // Add specific rules depending on mode ["development", "production"]
    modeConfiguration(mode)
  );
};
