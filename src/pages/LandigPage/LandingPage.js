import React,{ Component } from 'react'
import { Container,Jumbotron } from 'reactstrap'
import NavbarLanding from '../../components/NavBarLanding/index'
import Style from './LandingPageStyle.module.css'
import CarouselLanding from '../../components/Carousel/index'
import CardBook from '../../components/CardBook'
import Axios from 'axios'
import { getGenre,getData } from '../../redux/actions/home'
import { connect } from 'react-redux'
import Loading from '../../components/Loading'

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            books : [
            ],
        }
    }

    getData = ()=>{
        this.props.getData(this.props.auth.auth.token)
    }
    getGenre = ()=>{
        this.props.getGenre(this.props.auth.auth.token)
    }
    componentWillMount(){
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
                        <div className={`${Style.jumbotron} text-align-center`}>
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
                    <div className={`col-md-12 m-2 ${Style.paddingTop}`}>
                        <div className={Style.content}>
                            <h3>Classic</h3>
                        </div>
                        {/* <div className={`${Style.cardWrapper}`}>
                            {this.props.home.book.map((row)=>{
                                return <CardBook key={row.id} data={row} history={this.props.history} l={this.props}/>
                            })}
                        </div> */}
                        {
                            this.props.home.isLoadingGenre ? 
                            <div className="d-flex justify-content-center align-items-center">
                            <Loading/>
                            </div> :
                            <div className={`${Style.cardWrapper}`}>
                            {this.props.home.book.map((row)=>{
                                return <CardBook data={row} key={row.id} history={this.props.history} l={this.props}/>
                            })}
                            </div>
                        }
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'#F4F3F1'}}>
                    <div className="col-md-12 m-2" style={{paddingTop: '10px'}}>
                        <div className={Style.content}>
                            <h3>Horor</h3>
                        </div>
                        {/* <div className={`${Style.cardWrapper}`}>
                            {this.props.home.adventure.map((row)=>{
                                return <CardBook key={row.id} data={row} history={this.props.history} l={this.props}/>
                            })}
                        </div> */}
                        {
                            this.props.home.isLoadingBook ?
                            <div className="d-flex justify-content-center align-items-center">
                                <Loading/>
                            </div> 
                            :
                            <div className={`${Style.cardWrapper}`}>
                            {this.props.home.adventure.map((row)=>{
                                return <CardBook data={row} key={row.id} history={this.props.history} l={this.props}/>
                            })}
                        </div>
                        }
                    </div>
                </div>
                <div className="row" style={{backgroundColor:'#F4F3F1'}}>
                    <div className="col-md-12 m-2" style={{paddingTop: '10px'}}>
                        <div className={Style.content}>
                            <h3>Adventure</h3>
                        </div>
                        {
                            this.props.home.isLoadingGenre ? 
                            <div className="d-flex justify-content-center align-items-center">
                                <Loading/>
                            </div> :
                            <div className={`${Style.cardWrapper}`}>
                            {this.props.home.book.map((row)=>{
                                return <CardBook data={row} key={row.id} history={this.props.history} l={this.props}/>
                            })}
                        </div>
                        }
                    </div>
                </div>
            </Container>
        )
    }
}
const mapStateToProps = state=>({
    auth : state.auth,
    home : state.home
})
const mapDispatchToProps = {
    getGenre,
    getData
}
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage)