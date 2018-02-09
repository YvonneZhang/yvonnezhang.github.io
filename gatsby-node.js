var px2rem = require('postcss-px2rem')

exports.modifyWebpackConfig = function (config, stage) {
  config.merge({
    postcss: [
      px2rem({remUnit: 18})
    ]
  })
  return config
}
