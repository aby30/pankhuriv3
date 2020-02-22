import React, { Component } from 'react';
import logo from '../../components/common/icons/logo.png';
import aboutIcon from '../../components/common/icons/aboutIcon.png';
import customise from '../../components/common/icons/customise.png';
import gift from '../../components/common/icons/gift.png';
import save from '../../components/common/icons/save.png';
import orders from '../../components/common/icons/gift.png';
import Overlay from '../../components/Overlay';
import './__style.css';

class MobValidation extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {showMobSlider: false, showOtpSlider: false};
  }
  openOtpSlider = () => {
    const { showOtpSlider } = this.state
    this.setState({showOtpSlider: !showOtpSlider})
  }
  openMobSlider = () => {
    const { showMobSlider } = this.state
    this.setState({showMobSlider: !showMobSlider})
  }

  render() {
    const { showMobSlider, showOtpSlider } = this.state
    const { showMob, showOtp } = this.props
    return (
      <div className={`mobValid__wrap`}>
        <div className="mobValid__inner">
          <div className={`mobValid__mobSlider sliderValidation ${showMob || showMobSlider ? 'SlideOpen' : ''}`}>
            <div className="sliderValidation__inner">
              <div className="sliderValidation__title">
                Enter your mobile number
              </div>
              <div className="sliderValidation__input">
                <input type="number" maxLength="10" />
              </div>
              <div className="sliderValidation__submitCta">
                <button onClick={this.openOtpSlider}>Get OTP</button>
              </div>
            </div>
          </div>
          <div className={`mobValid__otpSlider sliderValidation ${showOtp || showOtpSlider ? 'SlideOpen' : ''}`}>
            <div className="sliderValidation__inner">
              <div className="sliderValidation__title">
                Enter OTP
              </div>
              <div className="sliderValidation__input otp">
                <input type="number" maxLength="4" />
              </div>
              <div className="sliderValidation__submitCta">
                <button>Start Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MobValidation;
