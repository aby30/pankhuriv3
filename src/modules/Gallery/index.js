import React, { Component } from 'react';
import Modal from '../../components/Modal';
import Masonry from 'react-masonry-css';
import chat from '../../components/common/icons/chat.png';
import deleteIcon from '../../components/common/icons/delete.png';
import heart from '../../components/common/icons/save.png';
import savedHeart from '../../components/common/icons/savedHeart.png';
import { getCookie } from '../../components/common/helper';
import MobValidation from '../MobValidation';
import Header from '../Header';

import './__style.css';


class Gallery extends Component<Props> {
  constructor(props) {
    super(props)
    this.addFavourite = this.addFavourite.bind(this)
    this.state = {
      showModal: false,
      modalImgToShow: 0,
      showMobileValidationScreen: false,
      itemList: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    const apiUrl = 'https://15.206.91.199:443/get_all'
    fetch(apiUrl).then(res => res.json())
      .then(response => {
        this.setState({
          isLoaded: true,
          itemList: response,
        })
      })
  }

  openMobValidSlider = () => {
    const { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: !showMobileValidationScreen})
  }

  showModalFunc = (indexToShow) => {
    this.setState({
      modalImgToShow: indexToShow,
      showModal: true,
    });
  }
  hideModalFunc = () => {
    this.setState({
      showModal: false,
    });
  }
  openMobValidSlider = () => {
    const { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: !showMobileValidationScreen})
  }
  addFavourite = (lehengaId) => {
    const allCookies = document.cookie
    if (allCookies.indexOf("; ucheck=") != -1 || allCookies.indexOf("ucheck=") != -1) {
      const userMobNum = getCookie('ucheck')
      const addFavUrl = `https://15.206.91.199:443/add_favourites?phone_no=${userMobNum}&lehenga_id=${lehengaId}`
      fetch(addFavUrl).then(res => res.json())
        .then(response => {
          if (response === 'FAVOURITES INSERTED') {
            console.log('savedd')
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
    const { modalImgToShow, showModal, showMobileValidationScreen, itemList, isLoaded } = this.state

    if (!isLoaded) {
      return <div className="preloader">Loading...</div>
    } else {
      return (
        <div className="favorite__main">
          <Header variant={'secondary'}/>
          <div className="favorite__inner">

            <div className="favorite__title">
              Gallery
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
                {itemList.map((eachItem, index) => (
                  <div className="favorite__imgWrap" key={eachItem.id}>
                    {/*<img src="https://res.cloudinary.com/abyy30/image/upload/v1581962546/img1_mqv5vl.jpg" onClick={() => this.showModalFunc(1)}/>*/}
                    <img src={eachItem.photo} onClick={() => this.showModalFunc(index)}/>
                    {/*<div className="favorite__delete"><img src={heart} onClick={() => this.addFavourite(eachItem.id)}/></div>*/}
                  </div>
                ))
                }
              </Masonry>
              {showModal && <Modal imgToShowProp={modalImgToShow} closeModal={this.hideModalFunc} imageList={itemList}/>}
            </div>
          </div>
        </div>
      )
    }


  }

}


export default Gallery;
