import { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../modules/fullpageModules.js';

import FullPageTitleCard from '../components/FullPageTitleCard';
import FullPageImageCard from '../components/FullPageImageCard';

const CARD_TYPE = {
  TITLE: 'title',
  IMAGE: 'image',
};

class About extends Component {

  componentDidMount() {
    $('#fullpage').fullpage({
      touchSensitivity: 1,
      keyboardScrolling: true,
      onLeave: () => {
        console.log('fullpage.onLeave');
      },
      afterLoad: () => {
        console.log('fullpage.afterLoad');
      },
      afterRender: () => {
        console.log('fullpage.afterRender');
      },
      afterResize: () => {
        console.log('fullpage.afterResize');
      },
      afterResponsive: () => {
        console.log('fullpage.afterResponsive');
      },
      afterSlideLoad: () => {
        console.log('fullpage.afterSlideLoad');
      },
      onSlideLeave: () => {
        console.log('fullpage.onSlideLeave');
      },
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
    
    const imageItems = [contentRow1, contentRow2].map(
      (contentRow, rowIdx) => {
        const imageRowItems = contentRow.map(
          (content, contentIdx) => {
            if (content.type === CARD_TYPE.IMAGE) {
              return (
                <FullPageImageCard
                  {...content}
                  className="slide"
                  key={'about_' + rowIdx + '' + contentIdx}
                />
              );
            } else if (content.type === CARD_TYPE.TITLE) {
              return (
                <FullPageTitleCard
                  {...content}
                  className="slide"
                  key={'about_' + rowIdx + '' + contentIdx}
                />
              );
            } else {
              console.error(content.type);
            }
          });
        
        return (
          <div className="section" key={"row_"+rowIdx} id={"section"+rowIdx}>
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

export default About;