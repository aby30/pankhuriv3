import React, { Component } from 'react'
import MobValidation from '../MobValidation'
import { Link, Redirect } from 'react-router-dom'
import Header from '../Header'
import chat from '../../components/common/icons/chat.png'

import './__style.css'


class About extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {showMobileValidationScreen: false, isLoaded: false, itemList: []}
  }
  componentDidMount() {

  }

  openMobValidSlider = () => {
    const { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: !showMobileValidationScreen})
  }
  tawkRender = () => {
    let { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: false})
    const {Tawk_API} = window
    Tawk_API.toggle()
  }

  render() {
    const {showMobileValidationScreen, itemList} = this.state

    return (
      <div className="about">
        <Header variant={'secondary'}/>
        <div className="about__wrap">
          <div className="about__inner">
            <div className="about__title">About Pankhuri </div>
            <div>
              <p>Our goal at Pankhuri is simple, make wedding planning a breeze for even the busiest soon-to-wed couples. The expert team at Pankhuri specialises in every aspect of what’s required for weddings. Whether you dream of destination or going local; whether you want to be a chic couple or royal ones; or even when your sister/brother/friend is getting married - any and all how-to questions are answered. Pankhuri Weddings Company connects brides, grooms, their parents, friends and relatives to right vendors and ideas.</p>
              <p>Begin your most magical journey.</p>
            </div>
          </div>
          <div className="about__social">
            <a href="https://www.facebook.com/pankhuri.weddings/" target="_blank" className="about__socialItem">
              Facebook
            </a>
            <a href="https://www.instagram.com/pankhuri.weddings/" target="_blank" className="about__socialItem">
              Instagram
            </a>
          </div>
        </div>
      </div>
    )
  }

}


export default About;
