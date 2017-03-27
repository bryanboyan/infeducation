const { Component } = require('react');
const ReactDOM = require('react-dom');
const FullPageTitleCard = require('../components/FullPageTitleCard');
const FullPageImageCard = require('../components/FullPageImageCard');

const CARD_TYPE = {
  TITLE: 'title',
  IMAGE: 'image',
};

class About extends Component {

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).fullpage({
      touchSensitivity: 1,
      keyboardScrolling: true,
    });
  }

  render() {

    const contentRow1 = [
      {
        type: CARD_TYPE.TITLE,
        title: "生活",
        subtitle: "美姿是一种年轻的态度",
      },
      {
        type: CARD_TYPE.IMAGE,
        bgImage: "/images/about/12.jpg",
        title1: "奇趣",
        title2: "CHECKY",
        subtitle1: "寻找生活的乐趣",
        subtitle2: "成为生活的玩家",
      },
      {
        type: CARD_TYPE.IMAGE,
        bgImage: "/images/about/13.jpg",
        title1: "奇趣",
        title2: "CHECKY",
        subtitle1: "寻找生活的乐趣",
        subtitle2: "成为生活的玩家",
      },
    ];
    const contentRow2 = [
      {
        type: CARD_TYPE.TITLE,
        title: "择校",
        subtitle: "美姿是一种年轻的态度",
      },
      {
        type: CARD_TYPE.IMAGE,
        bgImage: "/images/about/22.jpg",
        title1: "奇趣",
        title2: "CHECKY",
        subtitle1: "寻找生活的乐趣",
        subtitle2: "成为生活的玩家",
      },
      {
        type: CARD_TYPE.IMAGE,
        bgImage: "/images/about/23.jpg",
        title1: "奇趣",
        title2: "CHECKY",
        subtitle1: "寻找生活的乐趣",
        subtitle2: "成为生活的玩家",
      },
    ];

    // const content = contentRow1[0];
    // return (
    //   <FullPageTitleCard
    //     className="slide"
    //     title={content.title}
    //     subtitle={content.subtitle}
    //     key={'about_' + 0 + '' + 0}
    //   />
    // );
    
    const imageItems = [contentRow1, contentRow2].map(
      (contentRow, rowIdx) => {
        const imageRowItems = contentRow.map(
          (content, contentIdx) => {
            if (content.type === CARD_TYPE.IMAGE) {
              return (
                <FullPageImageCard
                  className="slide"
                  bgImage={content.bgImage}
                  title1={content.title1}
                  title2={content.title2}
                  subtitle1={content.subtitle1}
                  subtitle2={content.subtitle2}
                  key={'about_' + rowIdx + '' + contentIdx}
                />
              );
            } else if (content.type === CARD_TYPE.TITLE) {
              return (
                <FullPageTitleCard
                  className="slide"
                  title={content.title}
                  subtitle={content.subtitle}
                  key={'about_' + rowIdx + '' + contentIdx}
                />
              );
            } else {
              console.error(content.type);
            }
          });
        
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