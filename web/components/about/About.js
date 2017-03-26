const React = require('react');

class About extends React.Component {

  componentDidMount() {
    console.log('component did mount');
  }

  render() {
    return (
      <div>
        <img src="images/about/about1.jpg" />
      </div>
    );
  }
}

module.exports = About;