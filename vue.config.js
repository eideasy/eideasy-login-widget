const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  /*
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
   */
};
