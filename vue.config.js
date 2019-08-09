// vue.config.js
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const indexData = require('./index.json')
const detailData = require('./detail.json')
const cityData = require('./city.json')

const index = indexData.data
const detail = detailData.data
const city = cityData.data

module.exports = {
  baseUrl: './',
  devServer: {
    // 设置代理
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost/api',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // },
    before: app => {
      app.get('/api/index', function(req, res) {
        res.json({
          ret: true,
          data: index
        })
      })
      app.get('/api/detail', function(req, res) {
        res.json({
          ret: true,
          data: detail
        })
      })
      app.get('/api/city', function(req, res) {
        res.json({
          ret: true,
          data: city
        })
      })
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false,
                drop_console: true, //console
                drop_debugger: false,
                pure_funcs: ['console.log'] //移除console
              }
            }
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('stylus').oneOf(type))
    )
  }
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/varibles.styl'),
        path.resolve(__dirname, './src/styles/mixins.styl')
      ]
    })
}
