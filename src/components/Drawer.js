import { Drawer, Space,Avatar } from 'antd';
import React, { Component } from 'react'
// import { NavbarToggler } from 'reactstrap';
import Style from "../styles/DrawerStyle.module.css";
class DrawerApp extends Component {
    constructor(props){
        super(props)
        this.state = { 
          visible: false, 
          placement: 'left',
          active : ''
       };
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

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Space>
            <button className={`hamburger hamburger--3dx ${this.state.active}`} type="button"
                    aria-label="Menu" aria-controls="navigation" aria-expanded="true" onClick={this.showDrawer}>
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
        </Space>
        <Drawer
          width={320}
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
          maskStyle={{opacity:0,backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
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
              <h5> Niki Zefanya </h5>
            </div>
          </div>
          <div className={`d-flex flex-column justify-content-center p-2 pt-4 ${Style.menuList}`}>
          <p>Explore</p>
          <p>Explore</p>
          <p>Explore</p>
          </div>
        </Drawer>
      </>
    );
  }
}

export default DrawerApp
