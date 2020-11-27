module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 9999,
    open: true,
    proxy: {
      '/mall': {
        target: "http://123.207.32.32:8000",
        changeOrigin: true,
        pathRewrite: {
          '^/mall': ''
        }
      }
    }
  }
}
