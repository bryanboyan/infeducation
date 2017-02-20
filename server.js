const express = require('express');
global.server = express();

const routes = require('./server/routes');

/**
 * Routes
 */
server.get('/', routes.home.Home);

server.listen(3000, function () {
  console.log('Server started on port 3000!')
});