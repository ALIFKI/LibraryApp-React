import React,{ Component } from 'react'
import { Container,Jumbotron } from 'reactstrap'
import NavbarLanding from '../../components/NavBarLanding/index'
import Style from './LandingPageStyle.module.css'
import CarouselLanding from '../../components/Carousel/index'
import CardBook from '../../components/CardBook'

export default class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            books : [
                {
                    id : 1,
                    title : 'Books title',
                    desc : 'Lorem ipsum dolor loorwm lidasdk jhndsaob'
                },
                {
                    id : 1,
                    title : 'Books title',
                    desc : 'Lorem ipsum dolor loorwm lidasdk jhndsaob'
                },
                {
                    id : 1,
                    title : 'Books title',
                    desc : 'Lorem ipsum dolor loorwm lidasdk jhndsaob'
                },
                {
                    id : 1,
                    title : 'Books title',
                    desc : 'Lorem ipsum dolor loorwm lidasdk jhndsaob'
                },
                {
                    id : 1,
                    title : 'Books title',
                    desc : 'Lorem ipsum dolor loorwm lidasdk jhndsaob'
                },
            ]
        }
    }
    render() {
        return (
            <Container fluid className={Style.Container}>
                <div className="row">
                    <div className="col-md-12">
                        <NavbarLanding history={this.props}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <Jumbotron fluid style={{backgroundColor:'white'}}>
                        <div className={Style.jumbotron}>
                            <h2>Dont Stop learning because life dont stop teaching</h2>
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
                        <div className={Style.content}>
                            <h3>Genre</h3>
                        </div>
                        <div className={`${Style.cardWrapper}`}>
                            {this.state.books.map((row)=>{
                                return <CardBook data={row} history={this.props.history} l={this.props}/>
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}