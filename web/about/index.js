const ReactDOM = require('react-dom');
const About = require('./About');

window.onload = () => {
  ReactDOM.render(
    <About />,
    document.getElementById('react-root'),
  );
};