import React,{Component} from 'react'
// import {Carousel} from 'antd'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from '../styles/Carousel/CarouselStyle.module.css'
import Axios from 'axios';
class SliderComponent extends Component {
    constructor(props) {
        super()
        this.state ={
            book : {}
        }
    }
    getData = ()=>{
        Axios({
            method : 'GET',
            url : 'http://localhost:3000/api/books/books?search=&page=1&limit=3&sort=0&by=title&order=created_at',
            headers: {
                Authorization : localStorage.getItem('token'),
            }
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    componentWillMount(){
        this.getData()
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
            </Slider>
          </div>
        )
    }
} 

export default SliderComponent