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
class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            book : [],
            username : '',
            password : ''

        }
    }

    getAll = ()=>{
         axios({
             method: 'GET',
             headers : {
                 Authorization : localStorage.getItem('token')
             },
             url : 'http://localhost:3000/api/books?search=&page=1&limit=10&sort=0&by=title&order=genre'
         }).then(
             (res)=>{
                 console.log(res.data)
                 this.setState({book : res.data.data})
             }
         )
         .catch(
             (err)=>{
                 console.log(err)
             }
         )
    }
    componentDidMount(){
        this.getAll()
    }

    render() {
        return (
            <>
            <NavbarComponent/>
            <SideBar/>
            <Container className={`${Style.bg}`} fluid={true} style={{paddingLeft:'250px',paddingTop:'70px'}}>
                <div className="row d-flex flex-row align-items-start justify-content-start">
                    <div className="col-8">
                        <div className="d-felx flex-column">
                            <SliderComponent/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>Ini card</h4>
                    </div>
                </div>
                <Divider/>
                <div className="row">
                    <div className="col-12">
                        <h3 className='pl-5'>ListBook</h3>
                    </div>
                    <div className="col-md-12 d-flex flex-wrap justify-content-center align-items-center p-0">
                        {
                            this.state.book.map((row,index)=>{
                                return <CardBook key={row.id} data={row} history={this.props.history}/>
                            })
                        }
                    </div>
                </div>
            </Container>
            </>
        )
    }
}

export default HomePage