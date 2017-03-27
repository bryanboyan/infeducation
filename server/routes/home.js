const { fetchAccessToken } = require(__server+'/lib/wechat')

module.exports = function(req, res) {
  fetchAccessToken.then(accessToken => {
    res.render('index', {
      dist: '/dist/home.bundle.js',
    });
  });
};
