const { subscribe } = require('../utils/serverAPI');
const { Button } = require('react-bootstrap');

module.exports = (props) => {
  const {
    authorThumb,
    authorName,
    id,
    title,
    description,
    thumb,
    subscribeStatus,
  } = props;

  return (
    <div style={styles.item}>
      <div style={styles.headSection}>
        <img src={authorThumb} style={styles.authorThumb} />
        <div style={styles.descriptionSection}>
          <div style={styles.authorName}>{authorName}</div>
          <div style={styles.title}>{title}</div>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
      <div>
        <img src={thumb} style={styles.thumb} />
      </div>
      <div style={styles.subscribeSection}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={subscribe.bind(null, id, () => {console.log('subscribed');})}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

const styles = {
  item: {
    backgroundColor: 'white',
    margin: '5px 10px 10px',
    padding: 5,
  },
  headSection: {
    display: 'flex',
  },
  authorThumb: {
    borderRadius: '50%',
    display: 'inline-block',
    height: 80,
  },
  descriptionSection: {
    display: 'inline-block',
    height: 80,
    width: '75%',
    marginLeft: 10,
  },
  authorName: {
    display: 'inline-block',
    padding: '1px 5px',
    backgroundColor: '#62c8e5',
    color: '#f3f3f3',
    fontSize: '15px',
  },
  title: {
    display: 'inline-block',
    padding: '1px 5px',
    backgroundColor: '#493f3f',
    color: 'white',
    fontSize: '15px',
  },
  description: {
    marginTop: 8,
    lineHeight: '15px',
    fontSize: '12px',
  },
  thumb: {
    margin: '10px auto 5px',
    width: '95%',
    display: 'block',
  },
  subscribeSection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '15px auto 0'
  },
}