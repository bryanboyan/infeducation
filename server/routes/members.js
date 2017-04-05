module.exports = function route(req, res) {
	const memberList = [
    {
      thumb: '/images/authors/1.jpg',
      name: 'Mr Han',
      id: 1,
      introduction: 'My name is Mr. Han, I live in Beijing',
    },
    {
      thumb: '/images/authors/2.jpg',
      name: 'Sisley',
      id: 2,
      introduction: 'My name is Sisley, talk to me about anything!',
    },
  ];

  res.render('index', {
    dist: '/dist/members.bundle.js',
    pageData: {memberList},
  });
};
