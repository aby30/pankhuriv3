import React, { Component } from 'react';
import Modal from '../../components/Modal';
import Masonry from 'react-masonry-css';
import chat from '../../components/common/icons/chat.png';
import deleteIcon from '../../components/common/icons/delete.png';
import MobValidation from '../MobValidation';
import Header from '../Header';

import './__style.css';


class Favorite extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalImgToShow: 0,
      showMobileValidationScreen: false
    }
  }
  openMobValidSlider = () => {
    const { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: !showMobileValidationScreen})
  }

  showModalFunc = (indexToShow) => {
    this.setState({
      showModal: true,
      modalImgToShow: indexToShow,
    });
  }
  hideModalFunc = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 2,
    };
    const { modalImgToShow, showModal, showMobileValidationScreen } = this.state

    return (
      <div className="favorite__main">
        <Header variant={'secondary'}/>
        <div className="favorite__inner">

          <div className="favorite__title">
            Favorite
          </div>
          <div className="favorite__msgCta">
            <button type="button" onClick={this.openMobValidSlider}>
              <img src={chat} />
            </button>
            <MobValidation showMob={showMobileValidationScreen}/>
          </div>
          <div className="favorite__contentWrap">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="favorite-masonry-grid"
              columnClassName="favorite-masonry-grid_column"
            >
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img1_mqv5vl.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img5_cy4bcu.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img3_vmnzl8.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img4_oqt1ia.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img6_arfaxj.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img5_cy4bcu.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img3_vmnzl8.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img4_oqt1ia.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
              <div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img5_cy4bcu.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>
            </Masonry>
            {showModal && <Modal imgToShowProp={modalImgToShow} closeModal={this.hideModalFunc}/>}
          </div>
        </div>
      </div>
    )
  }

}


export default Favorite;
