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
    this.state = {showMobSlider: false, showOtpSlider: false, errorMsgMob: '', errorMsgOtp: '', sessionIdState:''};
  }

  toggleOtpSlider = () => {
    let { showOtpSlider } = this.state
    this.setState({showOtpSlider: !showOtpSlider})
  }
  toggleMobSlider = () => {
    let { showMobSlider } = this.state
    this.setState({showMobSlider: !showMobSlider})
  }

  getOtp = () => {
    const { errorMsgMob, sessionIdState } = this.state
    if (this.mobNum.value.length === 10) {
      let sessionId = Math.floor(Math.random() * 100) + 1
      this.setState({sessionIdState: sessionId})
      const apiUrl = `https://15.206.91.199:443/send_otp?session_id=${sessionId}&phone_no=${this.mobNum.value}`
      fetch(apiUrl).then(res => res.json())
        .then(response => {
          if (response.Status === 'Success') {
            this.toggleOtpSlider()
            this.setState({ errorMsgMob: ''})
          } else {
            this.setState({errorMsgMob: 'There was some error please retry'})
          }

        })
    } else {
      this.setState({errorMsgMob: 'Mobile should have 10 digits'})
    }
  }

  validateOtp = () => {
    const { onSuccessHook } = this.props
    const { errorMsgOtp, sessionIdState } = this.state

    if (this.otpNum.value.length === 6) {
      const apiUrl = `https://15.206.91.199:443/validate_otp?session_id=${sessionIdState}&phone_no=${this.mobNum.value}&otp=${this.otpNum.value}`
      fetch(apiUrl).then(res => res.json())
        .then(response => {
          if (response.status === 'True') {
            this.toggleOtpSlider()
            this.setState({errorMsgOtp: ''})
            document.cookie = `ucheck=${this.mobNum.value}`;
            onSuccessHook()
          } else {
            this.setState({errorMsgOtp: 'There was some error please retry'})
          }

        })
    } else {
      this.setState({errorMsgOtp: 'OTP should have 6 charcters'})
    }
  }

  render() {
    const { showMobSlider, showOtpSlider, errorMsgMob, errorMsgOtp } = this.state
    const { showMob, showOtp } = this.props

    return (
      <div className={`mobValid__wrap`}>
        <div className="mobValid__inner">
          <div className={`mobValid__mobSlider sliderValidation ${showMobSlider || showMob ? 'SlideOpen' : ''}`}>
            <div className="sliderValidation__inner">
              <div className="sliderValidation__title">
                Enter your mobile number
              </div>
              <div className="sliderValidation__input">
                <input type="number" maxLength="10" ref={input => this.mobNum = input}/>
                <div className={`error ${errorMsgMob.length > 0 ? 'showError' : ''}`}>
                  {errorMsgMob}
                </div>
              </div>
              <div className="sliderValidation__submitCta">
                <button onClick={this.getOtp}>Get OTP</button>
              </div>
            </div>
          </div>
          <div className={`mobValid__otpSlider sliderValidation ${showOtpSlider || showOtp ? 'SlideOpen' : ''}`}>
            <div className="sliderValidation__inner">
              <div className="sliderValidation__title">
                Enter OTP
              </div>
              <div className="sliderValidation__input otp">
                <input type="number" maxLength="6"  ref={input => this.otpNum = input}/>
                <div className={`error ${errorMsgOtp.length > 0 ? 'showError' : ''}`}>
                  {errorMsgOtp}
                </div>
              </div>
              <div className="sliderValidation__submitCta">
                <button onClick={this.validateOtp}>Start Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
MobValidation.defaultProps = {
    showMob: false,
    showOtp: false
}
export default MobValidation;
