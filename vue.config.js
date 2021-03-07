const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  filenameHashing: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/styles/_functions.scss";
        @import "@/styles/_variables.scss";
        @import "@/styles/_util.scss";
        `,
      }
    }
  },
  pages: {
    'eideasy-widget': {
      entry: 'src/main.js',
      filename: 'index.html'
    }
  }
  /*
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
   */
};
