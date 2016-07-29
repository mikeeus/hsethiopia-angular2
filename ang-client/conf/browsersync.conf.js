const conf = require('./gulp.conf');
const proxyMiddleWare = require('http-proxy-middleware');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      middleware:[
        proxyMiddleWare('/api', { target: "localhost:3000" })
      ]
    },
    open: false
  };
};
