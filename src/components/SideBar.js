import React,{ Component } from 'react'
import Style from '../styles/SideBarStyle.module.css'
import {
    NavbarBrand
} from 'reactstrap'
import {Divider} from 'antd'

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
                    <div className={`p-2 d-flex align-items-center ${Style.menuList}`}>
                        <p className={`m-auto`}>Manu List</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar