import React, { Component } from 'react';
import Modal from '../../components/Modal';
import Masonry from 'react-masonry-css';
import chat from '../../components/common/icons/chat.png';
import deleteIcon from '../../components/common/icons/delete.png';
import MobValidation from '../MobValidation';
import { getCookie } from '../../components/common/helper';
import Header from '../Header';

import './__style.css';


class Favorite extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalImgToShow: 0,
      showMobileValidationScreen: false,
      itemList: []
    }
  }
  componentDidMount() {

    const allCookies = document.cookie
    if (allCookies.indexOf("; ucheck=") != -1 || allCookies.indexOf("ucheck=") != -1) {
      const userMobNum = getCookie('ucheck')
      const allFavUrl = `https://15.206.91.199:443/get_favourites?phone_no=${userMobNum}`
      fetch(allFavUrl).then(res => res.json())
        .then(response => {
          this.setState({
            itemList: response,
          })
        })

    } else {
      this.openMobValidSlider()
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

  deleteFavourite = (lehengaId) => {
    const allCookies = document.cookie
    if (allCookies.indexOf("; ucheck=") != -1 || allCookies.indexOf("ucheck=") != -1) {
      const userMobNum = getCookie('ucheck')
      const addFavUrl = `https://15.206.91.199:443/del_favourites?phone_no=${userMobNum}&lehenga_id=${lehengaId}`
      fetch(addFavUrl).then(res => res.json())
        .then(response => {
          if (response === 'FAVOURITES DELETED') {
            console.log('Deleted')
          }
        })

    } else {
      this.openMobValidSlider()
    }
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 2,
    };
    const { modalImgToShow, showModal, showMobileValidationScreen, itemList } = this.state

    return (
      <div className="favorite__main">
        <Header variant={'secondary'}/>
        <div className="favorite__inner">

          <div className="favorite__title">
            Favourite
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

              {/*<div className="favorite__imgWrap">
                <img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img1_mqv5vl.jpg" onClick={() => this.showModalFunc(1)}/>
                <div className="favorite__delete"><img src={deleteIcon} /></div>
              </div>*/}

              {itemList.map((eachItem, index) => (
                <div className="favorite__imgWrap" key={eachItem.id}>
                  {/*<img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img1_mqv5vl.jpg" onClick={() => this.showModalFunc(1)}/>*/}
                  <img src={eachItem.photo} onClick={() => this.showModalFunc(index)}/>
                  <div className="favorite__delete"><img src={deleteIcon} onClick={() => this.deleteFavourite(eachItem.id)}/></div>
                </div>
              ))
              }

            </Masonry>
            {showModal && <Modal imgToShowProp={modalImgToShow} closeModal={this.hideModalFunc} imageList={itemList} showFav={false}/>}
          </div>
        </div>
      </div>
    )
  }

}


export default Favorite;
