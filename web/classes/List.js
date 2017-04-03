import { Component } from 'react';

import BigListItem from '../components/BigListItem';

class List extends Component {
  render() {
    const list = [
      {
        authorThumb: '/images/authors/1.jpg',
        authorName: 'Mr Han',
        id: 1,
        title: 'IKEA I',
        description: 'The IKEA class I. This is the core class to test business sense and talk about IKEA',
        thumb: '/images/classes/1.jpg',
      },
      {
        authorThumb: '/images/authors/2.jpg',
        authorName: 'Sisley',
        id: 2,
        title: 'Wine',
        description: 'The history of wine',
        thumb: '/images/classes/2.jpg',
      },
    ];

    return (
      <div style={styles.list}>
        {list.map((item, idx) => (
          <BigListItem
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