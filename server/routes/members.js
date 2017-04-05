module.exports = function route(req, res) {
  res.render('index', {
    dist: '/dist/members.bundle.js',
  });
};
