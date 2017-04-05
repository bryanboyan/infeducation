module.exports = (props) => {
  const {bgImage, title1, title2, subtitle1, subtitle2, className} = props;
  const containerStyle = styles.container;
  containerStyle.backgroundImage = "url("+bgImage+")";

  return (
    <div className={className}>
      <div style={containerStyle}>
        <div style={styles.innerCardContainer}>
          <h2 style={styles.title2}>
            {title2}
          </h2>
          <h1 style={styles.title1}>
            {title1}
          </h1>
          <hr style={styles.separator} />
          <h4 style={styles.subtitle1}>
            {subtitle1}
          </h4>
          <h4>
            {subtitle2}
          </h4>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    color: 'white',
    backgroundSize: 'cover',
    fontFamily: '"Arial","Microsoft YaHei","黑体","宋体", "sans-serif"',
    textAlign: 'left',
    display: 'inline-block',
    height: '100vh',
    width: '100vw',
  },
  innerCardContainer: {
    border: '1px solid white',
    height: '600px',
    width: '300px',
    margin: '60px auto',
    padding: '350px 100px 40px 20px',
  },
  title2: {
  },
  title1: {
  },
  separator: {
    width: 30,
    marginLeft: 0,
  },
  subtitle1: {
    margin: '10px auto',
  }
};