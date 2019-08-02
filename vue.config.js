// vue.config.js
module.exports = {
  devServer: {
    proxy: {
        '^/api': {
        target: 'http://backend:4567',
        changeOrigin: true
      }
    }
  }
}

