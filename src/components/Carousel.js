import React,{Component} from 'react'
// import {Carousel} from 'antd'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from '../styles/Carousel/CarouselStyle.module.css'

class SliderComponent extends Component {
    constructor(props) {
        super()
    }
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding :'500px',
            adaptiveHeight: true
        }
        return (
            <div className="container">
            <Slider {...settings}>
            <div className='slide-div d-flex flex-row'>
                <div className={`m-1 ${Style.title}`}>
                    <h3 className={`m-2`}>Ubur-Ubur Lembur</h3>
                </div>
                <div className={`${Style.cardBook}`}>

                </div>
            </div>
            <div className='slide-div d-flex flex-row'>
                <div className={`m-1 ${Style.title}`}>
                    <h3 className={`m-2`}>Ubur-Ubur Lembur</h3>
                </div>
                <div className={`${Style.cardBook}`}>

                </div>
            </div>
            </Slider>
          </div>
        )
    }
} 

export default SliderComponent