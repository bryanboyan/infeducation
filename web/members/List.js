import { Component } from 'react';

import SmallListItem from '../components/SmallListItem';

class List extends Component {
  render() {
    const list = [
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

    return (
      <div style={styles.list}>
        {list.map((item, idx) => (
          <SmallListItem
            {...item}
            key={"big_list_item_"+idx}
          />
        ))}
      </div>
    );
  }
}
export default List;

const styles = {
  list: {
    backgroundColor: '#e8e8e8',
    display: 'flex',
    flexDirection: 'column',
  }
};