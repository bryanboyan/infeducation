const FullPageTitleCard = (props) => {
  const {title, subtitle, hasMore, className} = props;

  return (
    <div className={className}>
      <div style={styles.container}>
        <div style={styles.innerCardContainer}>
          <h1 style={styles.title}>
            {title}
          </h1>
          <hr style={styles.separator} />
          <h4 style={styles.subtitle}>
            {subtitle}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FullPageTitleCard;

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    height: '100vh',
    width: '100vw',
    textAlign: 'center',
    display: 'inline-block',
  },
  innerCardContainer: {
    border: '1px solid white',
    height: '600px',
    width: '300px',
    margin: '60px auto',
  },
  title: {
    margin: '250px auto 20px',
    fontFamily: '"Arial","Microsoft YaHei","黑体","宋体", "sans-serif"',
    letterSpacing: '5px',
  },
  separator: {
    width: 30,
  },
  subtitle: {
    margin: '20px auto',
  }
};