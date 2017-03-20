const path = require('path');
const express = require('express');
global.server = express();
require("babel-register");

// Configs
global.configs = require('./configs');

// For global require
global.__server = __dirname + '/server';
global.__web = __dirname + '/web';

/**
 * Views
 */
global.React = require('react');
server.set('views', path.join(__dirname, 'server/views'));
server.set('view engine', 'ejs');

/**
 * Routes
 */
const routes = require('./server/routes');
server.get('/', routes.home.Home);

server.listen(3000, function () {
  console.log('Server started on port 3000!')
});
