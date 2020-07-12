import React,{ Component } from 'react';
import Style from '../styles/HomeStyle.module.css'
// import DrawerApp from '../components/Drawer'
import { Container } from 'reactstrap';
import NavbarComponent from "../components/Navbar";
import SideBar from '../components/SideBar'
import SliderComponent from  '../components/Carousel'
import CardBook from '../components/Card';
import axios from 'axios';
import { Divider } from 'antd';
import {connect} from 'react-redux'
import { getBook } from '../redux/actions/admin';
import image from '../images/undraw_noted_pc9f.svg'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : {},
            book : [],
            username : '',
            password : ''

        }
        console.log(this.props)
    }
    componentWillMount(){
        this.setState({
            user : JSON.parse(localStorage.getItem('userData'))
        })
    }
    getAll = ()=>{
        this.props.getBook(this.props.auth.auth.token)
    }
    //sliceBook 
    // handleOnDelete = (id)=>()=>{
    //     console.log('res')
    //     var arr = [...this.state.book]
    //     arr.splice(id, 1);
    //     this.setState({book: arr});
    // }
    componentDidMount(){
        this.getAll()
    }

    render() {
        return (
            <>
            <NavbarComponent/>
            <SideBar history={this.props.history}/>
            <Container className={`${Style.bg}`} fluid={true}>
                <div className={`row d-flex flex-row align-items-start justify-content-start ${Style.statis}`}>
                    <div className="col-md-4 p-2">
                    <div className={`${Style.cardProfile}`}>
                            <div className={`${Style.image}`}>
                                <img src={image}/>
                            </div>
                            <div className={`${Style.detailUser}`}>
                                <p><b>Book Total</b> : 199</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className={`${Style.cardProfile}`}>
                            <div className={`${Style.image}`}>
                                <img src='./admin.svg'/>
                            </div>
                            <div className={`${Style.detailUser}`}>
                                <p>User :</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider/>
                <div className="row">
                    <div className="col-12">
                        <h3 className='pl-5'>List Books</h3>
                    </div>
                    <div className="col-md-12 d-flex flex-wrap justify-content-center align-items-center p-0">
                        {
                            this.props.admin.books.map((row,index)=>{
                                return <CardBook i={index} key={row.id} data={row} history={this.props.history} />
                            })
                        }
                    </div>
                </div>
            </Container>
            </>
        )
    }
}
const mapStateToProps = state => ({
    auth : state.auth,
    admin : state.admin
})
const mapDispatchToProps = {getBook}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)