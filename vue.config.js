const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'http://test.gkshwap.com/joce/' : './',
  outputDir: 'joce',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/common/less/index.less'),
      ]
    }
  },
  productionSourceMap:false
}
