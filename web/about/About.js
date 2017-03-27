const { Component } = require('react');
const ReactDOM = require('react-dom');

class About extends Component {

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).fullpage({
      touchSensitivity: 1,
      keyboardScrolling: true,
    });
  }

  render() {
    const imageGroups = [
      ['11', '12', '13'],
      ['21', '22', '23'],
      ['31', '32', '33'],
    ];
    const imageItems = imageGroups.map(
      (imageRow, rowIdx) => {
        const imageRowItems = imageRow.map(
          imageName => (
            <img
              className="slide"
              key={"about_" + imageName}
              src={"images/about/" + imageName + '.jpg'}
              style={{width: '100%'}}
            />
          )
        );
        
        return (
          <div className="section" key={"row_"+rowIdx}>
            {imageRowItems}
          </div>
        );
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