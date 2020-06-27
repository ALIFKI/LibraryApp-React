import React,{Component} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from './CarouselStyle.module.css'
import {Button} from 'reactstrap'
export default class CarouselLanding extends Component {
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
            <div className='slide-div d-flex flex-row justify-content-end'>
                <div className={`${Style.cardBook}`}>
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400" alt="" />
                </div>
                <div className={`m-1 ${Style.title}`}>
                    <h3 className={`m-2`}>Ubur-Ubur Lembur</h3>
                    <p className={`Desc`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus perferendis quod id! Rem autem quam ut esse
                    </p>
                    <Button className={`btn right-btn ${Style.btnLogin} ${Style.fP}`} style={{backgroundColor: 'black'}}>Borrow</Button>
                </div>
            </div>
            <div className='slide-div d-flex flex-row justify-content-end'>
                <div className={`${Style.cardBook}`}>
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400" alt="" />
                </div>
                <div className={`m-1 ${Style.title}`}>
                    <h3 className={`m-2`}>Ubur-Ubur Lembur</h3>
                    <p className={`Desc`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus perferendis quod id! Rem autem quam ut esse
                    </p>
                    <Button className={`btn right-btn ${Style.btnLogin} ${Style.fP}`} style={{backgroundColor: 'black'}}>Borrow</Button>
                </div>
            </div>
            <div className='slide-div d-flex flex-row justify-content-end'>
                <div className={`${Style.cardBook}`}>
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400" alt="" />
                </div>
                <div className={`m-1 ${Style.title}`}>
                    <h3 className={`m-2`}>Ubur-Ubur Lembur</h3>
                    <p className={`Desc`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus perferendis quod id! Rem autem quam ut esse
                    </p>
                    <Button className={`btn right-btn ${Style.btnLogin} ${Style.fP}`} style={{backgroundColor: 'black'}}>Borrow</Button>
                </div>
            </div>
            {/* <div className='slide-div d-flex flex-row'>
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
            </div> */}
            </Slider>
          </div>
        )
    }
}