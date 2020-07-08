import React,{ Component } from 'react';
import Style from '../styles/SideBarStyle.module.css';
import {
    NavbarBrand
} from 'reactstrap';
import {Divider, Drawer} from 'antd';
import DrawerInput from '../components/DrawerInput/DrawerInput'
import {SearchOutlined,LogoutOutlined} from '@ant-design/icons';
import { logout } from '../redux/actions/auth' 
import {connect} from 'react-redux';

class SideBar extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    handleOnClick=()=>{
        this.props.history.push('/search')
    }
    handleLogout=()=>{
        // localStorage.clear();
        this.props.logout()
        this.props.history.push('/login')
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
                    <div className={`p-2 d-flex align-items-start ${Style.menuList}`} onClick={this.handleOnClick}>
                        <p className={`m-auto  ml-2`}><SearchOutlined/>Search</p>
                    </div>
                    <div className={`p-2 d-flex align-items-start ${Style.menuList}`} onClick={this.handleLogout}>
                        <p className={`m-auto  ml-2`}><LogoutOutlined style={{marginRight: '5px'}} />Logout</p>
                    </div>
                </div>
                <DrawerInput/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>(
    {
      auth : state.auth
    }
    )
const mapDispatchToProps = {logout}
export default connect(mapStateToProps,mapDispatchToProps)(SideBar)