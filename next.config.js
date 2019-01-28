// next.config.js
const package = require('./package.json')
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    PACKAGE_VERSION: package.version,
    PACKAGE_NAME: package.name,
    PACKAGE_REPO_URL: package.repository.url
  },
  webpack(config, options) {

    return {
      ...config,
      entry: './src/client/index.tsx',
      output: {
          filename: 'target/bundle.js',
      },
      devtool: 'source-map',
      resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      module: {
          loaders: [
              {
                  test: /.tsx?$/,
                  loader: 'awesome-typescript-loader',
                  exclude: /node_modules/,
              }, {
                  test: /.js$/,
                  loader: 'source-map-loader',
                  enforce: 'pre',
              }
          ]
      }
    }
  }
})