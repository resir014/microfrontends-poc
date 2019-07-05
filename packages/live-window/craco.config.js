module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.filename = 'static/js/[name].js';
      webpackConfig.output.chunkFilename = 'static/js/[name].chunk.js';
      webpackConfig.output.library = 'liveWindow';
      webpackConfig.output.libraryTarget = 'window';

      webpackConfig.optimization.splitChunks = {};
      webpackConfig.optimization.runtimeChunk = false;

      return webpackConfig;
    },
  },
};
