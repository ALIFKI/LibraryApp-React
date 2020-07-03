import { Drawer, Space,Avatar } from 'antd';
import React, { Component } from 'react'
// import { NavbarToggler } from 'reactstrap';
import Style from "../styles/DrawerStyle.module.css";
import {
  MenuOutlined
} from '@ant-design/icons';
class DrawerApp extends Component {
    constructor(props){
        super(props)
        this.state = { 
          visible: false, 
          placement: 'right',
          active : '',
          user : {}
       };
       console.log(props)
    }

  showDrawer = () => {
    this.setState({
      visible: true,
      active : 'is-active'
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      active : ''
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  handleLogout=()=>{
    localStorage.clear();
    this.props.history.push('/login')
  }

  getUser = ()=>{
    this.setState({
      user : JSON.parse(localStorage.getItem('userData'))
    })
  }

  componentWillMount(){
    this.getUser()
  }

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Space>
          <div className="class" onChange={this.showDrawer}>
          <MenuOutlined style={{fontSize: '20px'}} onClick={this.showDrawer}/>
          </div>
        </Space>
        <Drawer
          width={320}
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
          // maskStyle={{opacity:0,backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
        >
          <div className="menu d-flex justify-content-end align-items-end">
            <button className={`hamburger hamburger--3dx ${this.state.active}`} type="button"
                      aria-label="Menu" aria-controls="navigation" aria-expanded="true" onClick={this.onClose}>
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
          </div>
          <div className="header-profile d-flex flex-column justify-content-center align-items-center">
            <div className="avatar p-3">
            <Avatar size={140} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
            </div>
            <div className={`name m-auto ${Style.name}`}>
              <h5> {this.state.user.name} </h5>
            </div>
          </div>
          <div className={`d-flex flex-column justify-content-center p-2 pt-4 ${Style.menuList}`}>
          {/* <p>Explore</p>
          <p>Explore</p> */}
          <p onClick={this.handleLogout}>Logout</p>
          </div>
        </Drawer>
      </>
    );
  }
}

export default DrawerApp
