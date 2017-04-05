import { Component } from 'react';

import SmallListItem from '../components/SmallListItem';

class List extends Component {
  render() {
    const list = [
      {
        thumb: '/images/authors/1.jpg',
        name: 'Mr Han',
        id: 1,
        introduction: 'The IKEA class I. This is the core class to test business sense and talk about IKEA',
      },
      {
        thumb: '/images/authors/2.jpg',
        name: 'Sisley',
        id: 2,
        introduction: 'The history of wine',
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