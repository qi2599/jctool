const path = require('path');

module.exports = {
  publicPath: './',
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
