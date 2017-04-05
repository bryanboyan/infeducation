module.exports = function route(req, res) {

	const classList = [
    {
      authorThumb: '/images/authors/1.jpg',
      authorName: 'Mr Han',
      id: 1,
      title: 'IKEA I',
      description: 'The IKEA class I. This is the core class to test business sense and talk about IKEA',
      thumb: '/images/classes/1.jpg',
    },
    {
      authorThumb: '/images/authors/2.jpg',
      authorName: 'Sisley',
      id: 2,
      title: 'Wine',
      description: 'The history of wine',
      thumb: '/images/classes/2.jpg',
    },
  ];

  res.render('index', {
    dist: '/dist/classes.bundle.js',
    pageData: {classList},
  });
};
