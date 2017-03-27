const { renderToString } = require('react-dom/server');
const { fetchAccessToken } = require(__server+'/lib/wechat')
const About = require(__web+'/components/about/About');

module.exports = function(req, res) {
  fetchAccessToken.then(accessToken => {
    // const markup = renderToString(<About />);
    res.render('index', {
      markup: "",
      data: {}
    });
  });
};
