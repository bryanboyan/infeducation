const { Component } = require('react');

const BigListItem = require('../components/BigListItem');

class List extends Component {
  render() {
    // TODO setup redux as data flow.
    const classList = window._pageData.classList;

    return (
      <div style={styles.list}>
        {classList.map((item, idx) => (
          <BigListItem
            {...item}
            key={"big_list_item_"+idx}
          />
        ))}
      </div>
    );
  }
}
module.exports = List;

const styles = {
  list: {
    backgroundColor: '#e8e8e8',
    display: 'flex',
    flexDirection: 'column',
  }
};