import { Drawer, Button, Radio, Space } from 'antd';
import React, { Component } from 'react'
import { NavbarToggler } from 'reactstrap';

class DrawerApp extends Component {
    constructor(props){
        super(props)
        this.state = { visible: false, 
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
          title="Menu"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
          maskStyle={{opacity:0,backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  }
}

export default DrawerApp
