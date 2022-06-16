const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/',
  devServer: {
    port: 8080,
    // host: 'localhost',
    open: true,
    proxy:{
      '/api' : {
        target: 'http://iam-uat.yuexiuproperty.cn',
        ws: true,
        changOrigin: true,
        secure: true,// 使用的是http协议则设置为false，https协议则设置为true
        pathRewrite: {
          '^/api': ''
      }
      }
    }
  }
})


