import { Drawer, Badge ,Space,Avatar,Popover,Button } from 'antd';
import React, { Component } from 'react'
// import { NavbarToggler } from 'reactstrap';
import Style from "../styles/DrawerStyle.module.css";
import Axios from 'axios'
import {
  MenuOutlined,
  BookOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';


class DrawerApp extends Component {
    constructor(props){
        super(props)
        this.state = { 
          visible: false, 
          placement: 'right',
          active : '',
          user : {},
          history : []
       };
       console.log(props)
    }

  showDrawer = () => {
    this.setState({
      visible: true,
      active : 'is-active'
    });
  };
  //get History 
  handleHistory = ()=>{
      Axios({
          method : 'GET',
          url : 'http://localhost:3000/api/transactions/user?search=&limit=10&page=1&sort=0&by=name&order=name',
          headers : {
            Authorization : localStorage.getItem('token')
          },
          data : {
              id : 18
          }
      }).then((res)=>{
          console.log(res.data)
          this.setState({
              history : res.data.data
          })
      }).catch((err)=>{
          console.log(err)
      })
  }
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
    // localStorage.clear();
    this.props.logout()
    this.props.history.push('/login')
  }

  getUser = ()=>{
    this.setState({
      user : JSON.parse(localStorage.getItem('userData'))
    })
  }

  componentWillMount(){
    this.getUser()
    this.handleHistory()
  }

  render() {
    const { placement, visible } = this.state;
    const text = <span>History Books</span>;
    const content = (
      <div className={`${Style.popoverContent}`}>
          <div className={`${Style.popoverList}`}>
          {this.state.history.map((row,index)=>{
            return <p key={index}><BookOutlined style={{paddingRight: '10px'}}/>
            {row.title}
            <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
            </Badge>
            </p>    
          })}
          </div>
        {/* <p>Content</p> */}
      </div>
    );
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
              <h5> Username </h5>
            </div>
          </div>
          <div className={`d-flex flex-column justify-content-center p-2 pt-4 ${Style.menuList}`}>
            <Popover placement="rightTop" title={text} content={content} trigger="hover">
                <p>History</p>
            </Popover>
          <p onClick={this.handleLogout}>Logout</p>
          </div>
        </Drawer>
      </>
    );
  }
}
const mapStateToProps = state=>({
  auth : state.auth,
  home : state.home
})
const mapDispatchToProps = {logout}
export default connect(mapStateToProps,mapDispatchToProps)(DrawerApp)
