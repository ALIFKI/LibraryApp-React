import React,{Component} from 'react'
import {Carousel} from 'antd'
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
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding :'500px',
            adaptiveHeight: true
        }
        return (
            <div className="container">
            <Slider {...settings}>
            <div className='slide-div'>
                <div className={`m-1 ${Style.title}`}>
                    <h3>Ubur-Ubur Lembur</h3>
                </div>
                
                </div>
            <div className='slide-div'><img src='facebook.jpg' alt="Credit to Alisa Anton on Unsplash"/></div>
            <div className='slide-div'><img src='facebook.jpg' alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
            </Slider>
          </div>
        )
    }
} 

export default SliderComponent