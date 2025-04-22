const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: ['dependency-name'],
  
  devServer: {
    historyApiFallback: true
  }
}

