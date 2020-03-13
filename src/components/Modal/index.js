import React from 'react';
import Overlay from '../../components/Overlay';
import back from '../common/icons/back.png';
import close from '../common/icons/close.svg';
import share from '../common/icons/share.png';
import whatsapp from '../common/icons/whatsapp.png';
import facebook from '../common/icons/facebook.png';
import twitter from '../common/icons/twitter.png';
import heart from '../common/icons/save.png';
import email from '../common/icons/email.png';
import shareLink from '../common/icons/shareLink.png';
import savedHeart from '../common/icons/savedHeart.png';
import chatCart from '../common/icons/ChatCart.png';
import ReactPlayer from 'react-player';
import { getCookie } from '../../components/common/helper';
import MobValidation from '../../modules/MobValidation'
import './__style.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgToShow: '',
      showShare: false,
      userMobNum: '',
      showMobileValidationScreen: false
    }
  }
  componentDidMount() {
    const { imgToShowProp } = this.props
    this.setState({ imgToShow: imgToShowProp})
    const allCookies = document.cookie
    if (allCookies.indexOf("; ucheck=") != -1 || allCookies.indexOf("ucheck=") != -1) {
      const userMobNumCookie = getCookie('ucheck')
      this.setState({ userMobNum: userMobNumCookie})
    }
  }

  next = () => {
    let { imgToShow } = this.state;
    this.setState({ imgToShow: imgToShow + 1 });
    console.log("next");
  }

  prev = () => {
    let { imgToShow } = this.state;
    this.setState({ imgToShow: imgToShow - 1 });
    console.log("prev");
  }

  showShareFn = () => {
    let { showShare } = this.state;
    this.setState({ showShare: !showShare });
  }
  addFavourite = (lehengaId, favId) => {
    const {userMobNum} = this.state
    const allCookies = document.cookie
    if (allCookies.indexOf("; ucheck=") != -1 || allCookies.indexOf("ucheck=") != -1) {
      const userMobNum = getCookie('ucheck')
      const addFavUrl = `https://15.206.91.199:443/add_favourites?phone_no=${userMobNum}&lehenga_id=${lehengaId}`
      fetch(addFavUrl).then(res => res.json())
        .then(response => {
          if (response === 'FAVOURITES INSERTED') {
            console.log('Favourite saved')
            document.getElementById(favId).src = savedHeart
          }
        })

    } else {
      this.openMobValidSlider()
    }
  }

  openMobValidSlider = () => {
    const { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: !showMobileValidationScreen})
  }

  askHandler = () => {
    const allCookies = document.cookie
    if (allCookies.indexOf("; ucheck=") != -1 || allCookies.indexOf("ucheck=") != -1) {
      this.tawkRender()
    } else {
      this.openMobValidSlider()
    }
  }

  tawkRender = () => {
    let { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: false})
    const {Tawk_API} = window
    Tawk_API.toggle()
  }

  copyToClipboard = (contentToCopy) => {
    let copyText = contentToCopy;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

  render() {

    const { imageList = [
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img1_mqv5vl.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img2_iqxdog.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img3_vmnzl8.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img4_oqt1ia.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img5_cy4bcu.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img6_arfaxj.jpg"
    ], imgToShowProp, closeModal, showFav = true } = this.props
    const { imgToShow, showShare, userMobNum, showMobileValidationScreen } = this.state
    return (
      <div className="modal__mainWrap">
        <div className="modal__inner">
          <div className="modal__close" onClick={closeModal}>
            <img src={close} />
          </div>
          <Overlay />
          <MobValidation showMob={showMobileValidationScreen} onSuccessHook={this.tawkRender}/>
          <div className="modal__imgCtrlWrap">

            <div className="modal__imgCtrlLeft" onClick={imgToShow > 1 ? this.prev : () => {} } onDrag={imgToShow > 1 ? this.prev : () => {} }>
              <img src={back} />
            </div>

            <div className="modal__imgWrap">
              {imageList.map((item, index) => {
                return (
                  <div className={`modal__img ${imgToShow === index ? 'showImg' : ''}`} key={`${item.title}${index}`}>
                    {/*<img src={item}/>*/}
                    <ReactPlayer url={item.video} playing={imgToShow===index} controls={false} style={{width: 'auto'}} light={item.photo}/>
                    <div className="modal__imgDescActns">
                      <div className="modal__imgDesc">
                        <div className="modal__imgDescTitle">
                          {item.title}
                        </div>
                        <div className="modal__imgDescSubTitle">
                          {item.description}
                        </div>
                        <div className="modal__imgDescColor">
                          Color: {item.color}
                        </div>
                      </div>
                      <div className="modal__imgActions">
                        <img src={share} onClick={this.showShareFn}/>
                        {showFav && (
                          <img src={item.isFavourite ? savedHeart : heart} onClick={() => this.addFavourite(item.id, `saveImg${index}`)} id={`saveImg${index}`}/>
                        )}
                        <img src={chatCart} onClick={() => this.askHandler()}/>
                        <div className={`modal__imgShareMedias ${showShare ? 'showShareModal' : ''}`}>
                          <div className="modal__imgShareMediaInner">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.pankhuri.co/" target="_blank" className="modal__imgShareMediaIcon">
                              <img src={facebook} />
                              <div>Facebook</div>
                            </a>
                            {/*<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.pankhuri.co/" className="modal__imgShareMediaIcon">
                              <img src={facebook} />
                              <div>Facebook</div>
                            </a>*/}
                            <a href="https://api.whatsapp.com/send?phone=916364047530" target="_blank" className="modal__imgShareMediaIcon">
                              <img src={whatsapp} />
                              <div>Whatsapp</div>
                            </a>
                            <a href="mailto:info@example.com?&subject=&body=https://www.pankhuri.co/" target="_blank" className="modal__imgShareMediaIcon">
                              <img src={email} />
                              <div>Email</div>
                            </a>
                            <div onClick={() => {navigator.clipboard.writeText('https://www.pankhuri.co/')}} className="modal__imgShareMediaIcon">
                              <img src={shareLink} />
                              <div>Copy Link</div>
                            </div>
                          </div>
                          <div className="modal__imgShareMediaCancelMob" onClick={this.showShareFn}>
                            <div>Close</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              )}
            </div>

            <div className="modal__imgCtrlRight" onClick={imgToShow-1 < imageList.length ? this.next : () => {} } onDrag={imgToShow-1 < imageList.length ? this.next : () => {} }>
              <img src={back} />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

{/*Modal.defaultProps = {
  imgToShowProp: 1
}*/}

export default Modal;
