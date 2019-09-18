module.exports = {
  devServer: {
    proxy: {
      "/v1": {
        target: "http://localhost:8888"
      }
    }
  },
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: "page-"
    }
  },
  configureWebpack: {
    devtool: "source-map",
    module: {
      rules: [
        {
          parser: {
            amd: false
          }
        }
      ]
    }
  }
};
