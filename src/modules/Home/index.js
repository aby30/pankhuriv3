import React, { Component } from 'react'
import MobValidation from '../MobValidation'
import { Link, Redirect } from 'react-router-dom'
import Masonry from 'react-masonry-css'
import Header from '../Header'
import chat from '../../components/common/icons/chat.png'

import './__style.css'


class Home extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {showMobileValidationScreen: false, isLoaded: false, itemList: []}
  }
  componentDidMount() {
    let lehId = 9
    for (var i = 0; i < 4; i++) {
      const apiUrl = `https://15.206.91.199:443/get_one?id=${lehId+i}`
      fetch(apiUrl).then(res => res.json())
        .then(response => {
          this.setState({
            isLoaded: true,
          })
          this.state.itemList.push(response[0])
        })
    }

  }

  openMobValidSlider = () => {
    const { showMobileValidationScreen } = this.state
    this.setState({showMobileValidationScreen: !showMobileValidationScreen})
  }
  askHandler = (e) => {
    e.preventDefault()
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

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1100: 3,
      700: 2,
    }
    const {showMobileValidationScreen, itemList} = this.state

    return (
      <div className="home__main">
        <Header variant={'primary'}/>
        <div className="home__inner">
          <div className="home__firstFold">
            <MobValidation showMob={showMobileValidationScreen} onSuccessHook={this.tawkRender}/>
            <div className="home__firstFoldInner">
              <div className="home__tagline">
                Stressed out with alot of question for your wedding day?
              </div>
              {/*<div className="home__mainQryField">
                <input type="text" placeholder="Where can I buy the best Wedding dress?" readonly="readonly"/>
              </div>*/}
              <div className="home__mainCta">
                <a href="" onClick={this.askHandler}>Ask Pankhuri</a>
              </div>
              <div className="home__msgCta">
                <a href="" onClick={this.askHandler}>
                  <img src={chat} />
                </a>
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
                  {itemList && (itemList.map((eachItem, index) => (
                    <div className="my-masonry-grid-imgs" key={eachItem.id}><img src={eachItem.photo} /></div>
                  ))
                  )}
                </Masonry>
                <div className="home__secondFoldImgsGridCta">
                  <Link to="/gallery" >
                    <button type="button">Explore</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default Home;
