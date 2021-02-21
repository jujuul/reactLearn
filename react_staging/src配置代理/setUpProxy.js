/*
 * @Author: your name
 * @Date: 2021-02-19 21:03:27
 * @LastEditTime: 2021-02-20 11:45:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\react_staging\src\setUpProxy.js
 */
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/api1", {
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: { "^/api1": "" },
    }),
    proxy("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
};
