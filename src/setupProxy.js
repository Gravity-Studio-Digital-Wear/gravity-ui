const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://gravity-dev.easychain.dev/",
      changeOrigin: true,
    })
  );
}