const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/product',
    createProxyMiddleware({
      target: 'https://front-test-api.herokuapp.com',
      changeOrigin: true,
    }),
  );

  app.use(
    '/api/product/:id',
    createProxyMiddleware({
      target: 'https://front-test-api.herokuapp.com',
      changeOrigin: true,
    }),
  );

  app.use(
    '/api/cart',
    createProxyMiddleware({
      target: 'https://front-test-api.herokuapp.com',
      changeOrigin: true,
    }),
  );
};
