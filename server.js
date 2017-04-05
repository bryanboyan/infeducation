const path = require('path');
const express = require('express');
global.server = express();
require("babel-register");
require('./polyfill');

// Some useful modules
global._ = require('lodash');

// Configs
global.configs = require('./configs');

// For global require
global.__server = __dirname + '/server';
global.__web = __dirname + '/web';

/**
 * Public resources
 */
server.use(express.static(path.join(__dirname, 'public')));

// Always try to json-stringify pageData
server.use(function (req, res, next) {
  const _render = res.render;
  res.render = function (view, options, fn) {
    let pageData = _.get(options, 'pageData', {});  // default value {}
    if (_.isObject(pageData)) {
      pageData = JSON.stringify(pageData);
    }
    options.pageData = pageData;

    _render.call(this, view, options, fn);
  }
  next();
});

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
server.get('/', routes.home);
server.get('/about', routes.about);
server.get('/classes', routes.classes);
server.get('/members', routes.members);

const serverConf = configs.server;
server.listen(serverConf.port, function () {
  console.log('Server started on port {0}!'.format(serverConf.port));
});
