import React, { Component } from 'react';
import MobValidation from '../MobValidation';
import Masonry from 'react-masonry-css';
import Header from '../Header';
import chat from '../../components/common/icons/chat.png';

import './__style.css';


class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {showMobileValidationScreen: false};
  }
  openMobValidSlider = () => {
    const { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: !showMobileValidationScreen})
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 2,
    };
    const {showMobileValidationScreen} = this.state;

    return (
      <div className="home__main">
        <Header variant={'primary'}/>
        <div className="home__inner">
          <div className="home__firstFold">
            <MobValidation showMob={showMobileValidationScreen}/>
            <div className="home__firstFoldInner">
              <div className="home__tagline">
                Stressed out with alot of question for your wedding day?
              </div>
              <div className="home__mainQryField">
                <input type="text" placeholder="Where can i buy the best Wedding dress?" />
              </div>
              <div className="home__mainCta">
                <button type="button" onClick={this.openMobValidSlider}>Ask Pankhuri</button>
              </div>
              <div className="home__msgCta">
                <button type="button" onClick={this.openMobValidSlider}>
                  <img src={chat} />
                </button>
              </div>
            </div>
          </div>

          <div className="home__secondFold">
            <div className="home__secondFoldInner">
              <div className="home__secondFoldTitle">
                Explore ideas
              </div>
              <div className="home__secondFoldImgsGrid">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="my-masonry-grid-imgs"><img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img1_mqv5vl.jpg" /></div>
                  <div className="my-masonry-grid-imgs"><img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img4_oqt1ia.jpg" /></div>
                  <div className="my-masonry-grid-imgs"><img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img3_vmnzl8.jpg" /></div>
                  <div className="my-masonry-grid-imgs"><img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img4_oqt1ia.jpg" /></div>
                  <div className="my-masonry-grid-imgs"><img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img5_cy4bcu.jpg" /></div>
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default Home;
