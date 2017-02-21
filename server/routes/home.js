'use strict';

const { renderToString } = require('react-dom/server');
const Home = require(__www+'/components/home/Home.js');

exports.Home = function(req, res) {
  const markup = renderToString(<Home />);

  res.render('index', {
    markup: markup,
    data: {}
  });
};