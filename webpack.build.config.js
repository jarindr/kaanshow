const autoprefixer = require('autoprefixer')
const path = require('path')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const webpack = require('webpack')
const StaticData = require('./StaticData')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const commonLoaders = require('./webpack/commonLoaders')
const createStylesheetLoaders = require('./webpack/createStylesheetLoaders')

module.exports = {
  entry: {
    main: './src/index.js',
    prerender: './src/prerender.js',
  },

  output: {
    publicPath: '/',
    path: path.join(__dirname, '/public/'),
    filename: 'assets/javascripts/bundle-[chunkhash].js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      ...commonLoaders,
      ...createStylesheetLoaders(createStylesheetLoaders.modes.production)
    ]
  },

  postcss: [autoprefixer({browsers: ['last 4 versions']})],

  plugins: [
    new ExtractTextPlugin('assets/stylesheets/style-[contenthash].css'),
    new StaticSiteGeneratorPlugin('prerender', StaticData.paths, StaticData, { window: {location: {}}}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
    })
  ]
}
