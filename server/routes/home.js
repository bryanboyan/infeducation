'use strict';

const { renderToString } = require('react-dom/server');
const { fetchAccessToken } = require(__server+'/lib/wechat')
const Home = require(__web+'/components/home/Home');

exports.Home = function(req, res) {
  fetchAccessToken.then(accessToken => {
    const markup = renderToString(
      <Home
        info={"access_token is "+accessToken}
      />,
    );
    res.render('index', {
      markup: markup,
      data: {}
    });
  });
};
