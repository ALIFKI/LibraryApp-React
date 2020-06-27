import React,{ Component } from 'react'
import { Container,Jumbotron } from 'reactstrap'
import NavbarLanding from '../../components/NavBarLanding/index'
import Style from './LandingPageStyle.module.css'
import CarouselLanding from '../../components/Carousel/index'
import Card from '../../components/Card'

export default class LandingPage extends Component {

    render() {
        return (
            <Container fluid className={Style.Container}>
                <div className="row">
                    <div className="col-md-12">
                        <NavbarLanding/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <Jumbotron fluid style={{backgroundColor:'white'}}>
                        <div className={Style.jumbotron}>
                            <h2>Jumbotron Icon</h2>
                        <p className={`lead ${Style.textJumbotron}`}>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                        <div className={`d-flex flex-row justify-content-center align-items-center ${Style.carousel}`}>
                            <CarouselLanding/>
                        </div>
                    </Jumbotron>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'#F4F3F1'}}>
                    <div className="col-md-12 m-2" style={{paddingTop: '310px'}}>
                        <div className="content">
                            <h3>Genre</h3>
                        </div>
                        <div className={`${Style.cardWrapper}`}>
                            <div className={`${Style.card}`} >
                                <div className={`${Style.block}`}>
                                    <h2>Title</h2>
                                </div> 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'#F4F3F1'}}>
                    <div className="col-md-12 m-2">
                        <div className="content">
                            <h3>Genre</h3>
                        </div>
                        <div className={`${Style.cardWrapper}`}>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                            <div className={`${Style.card}`} > 
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}