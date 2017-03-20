const React = require('react');

const Home = (props) => (
  <div style={{"backgroundColor": "blue", "color": "red"}}>
    <div>
      This is the home page. Info: {props.info}
    </div>
  </div>
);

module.exports = Home;
