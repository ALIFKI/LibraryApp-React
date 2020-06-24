import React,{ Component,useState } from 'react';
import Style from '../styles/HomeStyle.module.css'
import DrawerApp from '../components/Drawer'
import { Container } from 'reactstrap';
import NavbarComponent from "../components/Navbar";
import SideBar from '../components/SideBar'
import SliderComponent from  '../components/Carousel'
class HomePage extends Component {
    constructor(props){
        super(props)
        this.setState = {

        }
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
            </Container>
            </>
        )
    }
}

export default HomePage