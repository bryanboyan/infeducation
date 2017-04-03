module.exports = function route(req, res) {
  res.render('index', {
    dist: '/dist/classes.bundle.js',
  });
};
