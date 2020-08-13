import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../components/common/icons/logo.png';
import aboutIcon from '../../components/common/icons/aboutIcon.png';
import customise from '../../components/common/icons/customise.png';
import gift from '../../components/common/icons/gift.png';
import save from '../../components/common/icons/save.png';
import orders from '../../components/common/icons/gift.png';
import Overlay from '../../components/Overlay';
import { getCookie } from '../../components/common/helper';
import './__style.css';

class Header extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {menuSlideOpen: false, isLoggedIn: false, userMobNum: ''};
  }
  componentDidMount() {
    this.loginValidate()

  }
  loginValidate = () => {
    const mobNum = getCookie('ucheck')
    if (mobNum) {
      let { isLoggedIn } = this.state
      this.setState({isLoggedIn: true, userMobNum: mobNum})
    } else {
      let { isLoggedIn } = this.state
      this.setState({isLoggedIn: false, userMobNum: ''})
    }
  }

  openSlider = () => {
    const { menuSlideOpen } = this.state
    this.setState({menuSlideOpen: !menuSlideOpen})
    this.loginValidate()
  }

  render() {
    const { menuSlideOpen, isLoggedIn = false, userMobNum } = this.state
    const { variant = 'primary' } = this.props
    return (
      <div className={`header__wrap ${variant == 'secondary' ? 'secondaryHeader' : ''}`}>
        <Link to="/index" className="header__img">
          <img src={logo} />
        </Link>
        <div className="header__menuMain">
          <div className={`header__hamMenu ${menuSlideOpen ? 'showClose': ''}`} onClick={this.openSlider}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menuSlideOpen && <div className="header__menuSliderOverlay" onClick={this.openSlider}></div>}
          {/* {menuSlideOpen && <Overlay onClickFunc={this.openSlider}/>} */}
          <div className={`header__menuSliderWrap ${menuSlideOpen ? 'SlideOpen' : ''}`}>
            <div className="header__menuSliderInner">
            {isLoggedIn && (
              <div className="header__menuSliderTitleBlock">
                <div className="header__menuSliderTitleImg">
                  <img src="https://via.placeholder.com/85x85" />
                </div>
                <div className="header__menuSliderTitleDetails">
                  {/*<div className="header__menuSliderTitleName">
                    Abhipray Shailendra
                  </div>
                  <div className="header__menuSliderTitleContact">
                    abhipray.social@gma.com
                  </div>*/}
                  <div className="header__menuSliderTitleContact">
                    +91 {userMobNum}
                  </div>
                </div>
              </div>
            )}
              <div className="header__menuSliderOptionsWrap">
                <Link to="/gallery" className="header__menuSliderOption">
                  <span className="header__menuSliderOptionIcon">
                    <img src={orders} />
                  </span>
                  Gallery
                </Link>
                {isLoggedIn && (
                  <Link to="/favourite" className="header__menuSliderOption">
                    <span className="header__menuSliderOptionIcon">
                      <img src={save} />
                    </span>
                    Favorites
                  </Link>
                )}
                {/*<a className="header__menuSliderOption">
                  <span className="header__menuSliderOptionIcon">
                    <img src={customise} />
                  </span>
                  Customise
                </a>
                <a className="header__menuSliderOption">
                  <span className="header__menuSliderOptionIcon">
                    <img src={orders} />
                  </span>
                  Orders
                </a>
                <a className="header__menuSliderOption">
                  <span className="header__menuSliderOptionIcon">
                    <img src={gift} />
                  </span>
                  Offers
                </a>*/}
                <Link to="/about" className="header__menuSliderOption">
                  <span className="header__menuSliderOptionIcon">
                    <img src={aboutIcon} />
                  </span>
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
