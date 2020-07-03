import React,{ Component } from 'react'
import { Container,Jumbotron } from 'reactstrap'
import NavbarLanding from '../../components/NavBarLanding/index'
import Style from './LandingPageStyle.module.css'
import CarouselLanding from '../../components/Carousel/index'
import CardBook from '../../components/CardBook'
import Axios from 'axios'

export default class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            books : [
            ],
            adventure : [],
        }
    }

    getData = ()=>{
        Axios({
            method : 'GET',
            url : 'http://localhost:3000/api/books?search=&page=1&limit=100&sort=0&by=title&order=title',
            headers: {
                Authorization : localStorage.getItem('token'),
            }
        }).then((res)=>{
            console.log(res)
            this.setState({
                books : res.data.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    getGenre = ()=>{
        Axios({
            method : 'GET',
            url : 'http://localhost:3000/api/books?search=&page=1&limit=100&sort=1&by=title&order=title',
            headers: {
                Authorization : localStorage.getItem('token'),
            }
        }).then((res)=>{
            console.log(res)
            this.setState({
                adventure : res.data.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.getData()
        this.getGenre()
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
                        <p className={`lead ${Style.textJumbotron}`}>Book is a World than you can touch it and library is the universe</p>
                        </div>
                        <div className={`d-flex flex-row justify-content-center align-items-center ${Style.carousel}`}>
                            <CarouselLanding history={this.props.history}/>
                        </div>
                    </Jumbotron>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'#F4F3F1'}}>
                    <div className="col-md-12 m-2" style={{paddingTop: '310px'}}>
                        <div className={Style.content}>
                            <h3>Classic</h3>
                        </div>
                        <div className={`${Style.cardWrapper}`}>
                            {this.state.books.map((row)=>{
                                return <CardBook key={row.id} data={row} history={this.props.history} l={this.props}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'#F4F3F1'}}>
                    <div className="col-md-12 m-2" style={{paddingTop: '10px'}}>
                        <div className={Style.content}>
                            <h3>Horor</h3>
                        </div>
                        <div className={`${Style.cardWrapper}`}>
                            {this.state.adventure.map((row)=>{
                                return <CardBook key={row.id} data={row} history={this.props.history} l={this.props}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'#F4F3F1'}}>
                    <div className="col-md-12 m-2" style={{paddingTop: '10px'}}>
                        <div className={Style.content}>
                            <h3>Adventure</h3>
                        </div>
                        <div className={`${Style.cardWrapper}`}>
                            {this.state.books.map((row)=>{
                                return <CardBook data={row} key={row.id} history={this.props.history} l={this.props}/>
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}