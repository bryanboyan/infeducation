const React = require('react');
const ReactDOM = require('react-dom');

class About extends React.Component {

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).fullpage();
  }

  render() {
    const imageGroups = [
      ['11', '12', '13'],
      ['21', '22', '23'],
      ['31', '32', '33'],
    ];
    const imageItems = imageGroups.map(
      imageRow => {
        const imageRowItems = imageRow.map(
          imageName => (
            <img
              className="slide"
              key={"about_"+imageName}
              src={"images/about/" + imageName + '.jpg'}
              style={{width: '100%'}}
            />
          )
        );
        
        return <div className="section">{imageRowItems}</div>;
      }
    );

    return (
      <div id="fullpage">
        {imageItems}
      </div>
    );
  }
}

module.exports = About;