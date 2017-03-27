const ReactDOM = require('react-dom');
const Home = require('./Home');

window.onload = () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('react-root'),
  );
};