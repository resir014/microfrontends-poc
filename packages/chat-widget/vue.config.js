/* eslint-disable no-param-reassign */
/* eslint-disable arrow-parens */

module.exports = {
  configureWebpack: webpackConfig => {
    webpackConfig.output.filename = 'js/[name].js';
    webpackConfig.output.chunkFilename = 'js/[name].chunk.js';
    webpackConfig.output.library = 'chatWidget';
    webpackConfig.output.libraryTarget = 'window';
  },
};
