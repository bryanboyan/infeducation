const SmallListItem = (props) => {
  const {
    thumb,
    name,
    introduction,
  } = props;

  return (
    <div style={styles.item}>
      <img src={thumb} style={styles.thumb} />
      <div style={styles.introductionSection}>
        <div style={styles.name}>{name}</div>
        <p style={styles.introduction}>{introduction}</p>
      </div>
    </div>
  );
}

export default SmallListItem;

const styles = {
  item: {
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    display: 'flex',
  },
  thumb: {
    borderRadius: '50%',
    display: 'inline-block',
    height: 80,
  },
  introductionSection: {
    display: 'inline-block',
    height: 80,
    marginLeft: 10,
  },
  name: {
    display: 'inline-block',
    padding: '1px 5px',
    color: '#676767',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  introduction: {
    width: '90%',
    marginTop: 8,
    lineHeight: '15px',
    color: '#565252',
    fontSize: '12px',
  },
}