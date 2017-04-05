const { Component } = require('react');

const SmallListItem = require('../components/SmallListItem');

class List extends Component {
  render() {
    // TODO setup redux as data flow.
    const memberList = window._pageData.memberList;

    return (
      <div style={styles.list}>
        {memberList.map((item, idx) => (
          <SmallListItem
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