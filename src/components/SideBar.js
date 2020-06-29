import React,{ Component } from 'react';
import Style from '../styles/SideBarStyle.module.css';
import {
    NavbarBrand
} from 'reactstrap';
import {Divider, Drawer} from 'antd';
import DrawerInput from '../components/DrawerInput/DrawerInput'

class SideBar extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className={`${Style.sidebar}`}>
                <NavbarBrand className={`m-0 pl-4 pt-4 pb-1`}>
                    <h3 className={`${Style.logo}`}>Library App</h3>
                </NavbarBrand>
                <Divider></Divider>
                <div className={'d-flex flex-column pr-0 mr-0 pl-2'}>
                    <div className={`p-2 d-flex align-items-start ${Style.menuList} ${Style.active}`}>
                        <p className={`ml-2 m-0`}>Lis Book</p>
                    </div>
                    <div className={`p-2 d-flex align-items-start ${Style.menuList}`}>
                        <p className={`m-auto  ml-2`}>Manage Genre</p>
                    </div>
                    <div className={`p-2 d-flex align-items-start ${Style.menuList}`}>
                        <p className={`m-auto  ml-2`}>Mange Author</p>
                    </div>
                </div>
                <DrawerInput/>
            </div>
        )
    }
}

export default SideBar