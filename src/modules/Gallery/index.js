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
// Importing Mock images
import image1 from '../../components/common/mocked/images/mock_1.jpg'
import image2 from '../../components/common/mocked/images/mock_2.jpg'
import image3 from '../../components/common/mocked/images/mock_3.jpg'
import image4 from '../../components/common/mocked/images/mock_4.jpg'
import image5 from '../../components/common/mocked/images/mock_5.jpg'
import image6  from '../../components/common/mocked/images/mock_6.jpg'
import image7  from '../../components/common/mocked/images/mock_7.jpg'
import image8  from '../../components/common/mocked/images/mock_8.jpg'
import image9  from '../../components/common/mocked/images/mock_9.jpg'
import image10  from '../../components/common/mocked/images/mock_10.jpg'
import image11  from '../../components/common/mocked/images/mock_11.jpg'
import image12  from '../../components/common/mocked/images/mock_12.jpg'
import image13  from '../../components/common/mocked/images/mock_13.jpg'
import image14  from '../../components/common/mocked/images/mock_14.jpg'
import image15  from '../../components/common/mocked/images/mock_15.jpg'
// import image16  from '../../components/common/mocked/images/mock_16.jpg'
import video  from '../../components/common/mocked/videos/random.mp4'


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
    this.fetchGalleryData()
  }

  fetchGalleryData = () => {
    const mobNum = getCookie('ucheck')
    let apiUrl = `https://15.206.91.199:443/get_all?phone_no=${mobNum ? mobNum : ''}`

    // fetch(apiUrl).then(res => res.json())
    //   .then(response => {
    //     this.setState({
    //       isLoaded: true,
    //       itemList: response,
    //     })
    //   })
    // Mociking data
    this.setState({
      isLoaded: true,
      itemList: [
        {
          "id": 9,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image1,
          "video": video
        },
        {
          "id": 10,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image2,
          "video": video
        },
        {
          "id": 11,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image3,
          "video": video
        },
        {
          "id": 12,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image4,
          "video": video
        },
        {
          "id": 13,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image5,
          "video": video
        },
        {
          "id": 14,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image6,
          "video": video
        },
        {
          "id": 15,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image7,
          "video": video
        },
        {
          "id": 16,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image8,
          "video": video
        },
        {
          "id": 17,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image9,
          "video": video
        },
        {
          "id": 18,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image10,
          "video": video
        },
        {
          "id": 19,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image11,
          "video": video
        },
        {
          "id": 20,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image12,
          "video": video
        },
        {
          "id": 16,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image13,
          "video": video
        },
        {
          "id": 21,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image14,
          "video": video
        },
        {
          "id": 22,
          "title": "Raspberry Pink Kalidar Bridal Lehenga",
          "description": "Kalidar velvet lehenga with hand-crafted, intricate work of aari and rhinestones. It comes with a heavy velvet blouse and soft net dupatta. ",
          "color": "Pink",
          "event": "Wedding / Reception",
          "price": 30000,
          "photo": image15,
          "video": video
        },
      ],
    })
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
              <button type="button" onClick={this.askHandler}>
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
