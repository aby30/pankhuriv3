import React from 'react';
import Overlay from '../../components/Overlay';
import back from '../common/icons/back.png';
import close from '../common/icons/close.svg';
import share from '../common/icons/share.png';
import whatsapp from '../common/icons/whatsapp.png';
import facebook from '../common/icons/facebook.png';
import twitter from '../common/icons/twitter.png';
import heart from '../common/icons/save.png';
import chatCart from '../common/icons/ChatCart.png';
import './__style.css';
import ReactPlayer from 'react-player';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgToShow: '',
      showShare: false,
    }
  }
  componentDidMount() {
    const { imgToShowProp } = this.props;
    this.setState({ imgToShow: imgToShowProp})
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

  render() {

    const { imageList = [
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img1_mqv5vl.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img2_iqxdog.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img3_vmnzl8.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img4_oqt1ia.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img5_cy4bcu.jpg",
      "https://res.cloudinary.com/abyy30/image/upload/v1581962546/img6_arfaxj.jpg"
    ], imgToShowProp, closeModal } = this.props
    const { imgToShow, showShare } = this.state
    return (
      <div className="modal__mainWrap">
        <div className="modal__inner">
          <div className="modal__close" onClick={closeModal}>
            <img src={close} />
          </div>
          <Overlay />
          <div className="modal__imgCtrlWrap">

            <div className="modal__imgCtrlLeft" onClick={imgToShow > 1 ? this.prev : () => {} }>
              <img src={back} />
            </div>

            <div className="modal__imgWrap">
              {imageList.map((item, index) => {
                return (
                  <div className={`modal__img ${imgToShow === index ? 'showImg' : ''}`} key={item.toString()}>
                    {/*<img src={item}/>*/}
                    <ReactPlayer url={item.video} playing={imgToShow===index} controls style={{width: 'auto'}}/>
                    <div className="modal__imgActions">
                      <img src={share} onClick={this.showShareFn}/>
                      <img src={heart} />
                      <img src={chatCart} />
                      <div className={`modal__imgShareMedias ${showShare ? 'showShareModal' : ''}`}>
                        <div className="modal__imgShareMediaInner">
                          <div className="modal__imgShareMediaIcon">
                            <img src={whatsapp} />
                            <div>Whatsapp</div>
                          </div>
                          <div className="modal__imgShareMediaIcon">
                            <img src={facebook} />
                            <div>Facebook</div>
                          </div>
                          <div className="modal__imgShareMediaIcon">
                            <img src={twitter} />
                            <div>Twitter</div>
                          </div>
                          <div className="modal__imgShareMediaIcon">
                            <img src={whatsapp} />
                            <div>Whatsapp</div>
                          </div>
                          <div className="modal__imgShareMediaIcon">
                            <img src={whatsapp} />
                            <div>Whatsapp</div>
                          </div>
                          <div className="modal__imgShareMediaIcon">
                            <img src={whatsapp} />
                            <div>Whatsapp</div>
                          </div>
                          <div className="modal__imgShareMediaIcon">
                            <img src={whatsapp} />
                            <div>Whatsapp</div>
                          </div>
                          <div className="modal__imgShareMediaIcon">
                            <img src={whatsapp} />
                            <div>Whatsapp</div>
                          </div>
                        </div>
                        <div className="modal__imgShareMediaCancelMob" onClick={this.showShareFn}>
                          <div>Cancel</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              )}
            </div>

            <div className="modal__imgCtrlRight" onClick={imgToShow-1 < imageList.length ? this.next : () => {} }>
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
