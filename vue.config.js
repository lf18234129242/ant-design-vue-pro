module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://locahost:8080",
        bypass: function(req, res) {
          if(req.headers.accept.indexOf("html") !== -1) {
            return "/index.html"
          } else {
            const name = req.path.split("/api/")[1].split("/").join("_")
            const mock = require(`./mock/${name}`)
            const result = mock(req.mothed)
            delete require.cache[require.resolve(`./mock/${name}`)]
            return res.send(result)
          }
        }
      }
    }
  }
};
