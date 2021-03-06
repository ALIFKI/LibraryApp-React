import React,{ Component } from 'react';
import { Button,Container, Row, Col, Form } from 'reactstrap';
import Style from '../styles/RegisterStyle.module.css'
import { Link } from 'react-router-dom'
import Logo from '../images/bookshelf.png'
import openNotificationWithIcon from '../components/Notif'
// import {notification } from 'antd';
import image from '../images/undraw_mobile_login_ikmv.svg'
import InputLogin from '../components/Input';
import {connect} from 'react-redux'
import { register } from '../redux/actions/auth';
import AuthService from '../service/AuthService'
const { validateUsername,validatePassword,validateName } = AuthService()
class RegisterPage extends Component {
    constructor(props){
        super(props)

        this.textName = React.createRef();
        this.textEmail = React.createRef();
        this.textPassword = React.createRef()
    }

    //Register
    handleRegister = (event)=>{
      event.preventDefault()
      let data = {
            name : this.textName.current.state.data,
            email : this.textEmail.current.state.data,
            password : this.textPassword.current.state.data,
      }
      if (validateName(data.name).data&&validatePassword(data.password)&&validateUsername(data.email)) {
        this.props.register(data).then((res)=>{
          openNotificationWithIcon('success',"Success!",'Silahkan Login')
          this.props.history.push('/login')
        }).catch((err)=>{
          if(this.props.stateAuth.errorMsg == `Duplicate entry '${data.email}' for key 'users_email_unique'`){
            openNotificationWithIcon('error','Oopps!!',"Email has been taken by other user")
          }
          else{
            openNotificationWithIcon('error','Something Wrong',this.props.stateAuth.errorMsg)
          }
        })
      }
      else{
        if (validateUsername(data.email).data === false) {
          openNotificationWithIcon('error','Ooops!!','Invalid Email')
        }
        if (validatePassword(data.password).data === false) {
          openNotificationWithIcon('error','Ooops!!','Invalid Password')
        }
        if (validateName(data.name).data === false) {
          openNotificationWithIcon('error','Ooops!!','Invalid Username')
        }
      }

    }

    render() {
        return (
            <Container fluid={true} className={`flex h-100`}>
              <Row>
                <Col md='7' sm='0'className={`p-0 ${Style.remove}`}>
                  <div className={`d-flex flex-column w-100 h-100`}>
                  <div className={Style.coverImage}>
                        <h2 className={Style.textwhite}>Book is The Window to The Universe</h2>
                          <div className={Style.textblock}>
                            <img src={image} alt="nope"/>
                          </div>
                      </div>
                  </div>
                </Col>
                <Col md='5' sm='12'>
                <div className='d-flex flex-column w-100 h-100'>
              <div className='d-flex justify-content-end'>
                <img className='p-3' src={Logo} alt='Logo' />
              </div>
              <div className='flex-grow-1 d-flex justify-content-center align-items-center p-3'>
                <Form className='login-form mb-5' onSubmit={this.handleRegister}>
                    <div className={Style.title}>
                        <h1 onClick={this.openNotification}>Register</h1>
                        <p>Welcome Back, Please Register to Create account!</p>
                    </div>
                  <div className='input-wrapper no-gutter'>
                    <InputLogin name={'Usename'} required={true} placeholder={'Usename'} type={'text'} ref={this.textName}/>
                    <InputLogin name={'Email'} required={true} placeholder={'Email'} type={'email'} ref={this.textEmail}/>
                    <InputLogin name={'Password'} required={true} placeholder={'Password'} type={'password'} ref={this.textPassword}/>
                    </div>
                  <div className='mt-4 mb-5 pb-4 pt-4'>
                    <Button className={`btn right-btn ${Style.btnLogin} ${Style.fP}`} type='submit' style={{backgroundColor: 'black'}}>Register</Button>
                    <Link className={`btn left-btn ml-3 ${Style.btnInfo} ${Style.fP}`} to='/login'>Login</Link>
                  </div>
                  <div className={`d-flex flex-column mt-5 pt-5 ${Style.fP}`}>
                    <div className={`p-6`}>By signing up, you agree to Library</div>
                    <div> <a href='#' className={Style.a}>Terms and Conditions</a> &amp; <a href='#' className={Style.a}>Privacy Policy</a></div>
                  </div>
                </Form>
              </div>
            </div>
                </Col>
              </Row>
            </Container>
        )
    }
}
//getState Redux
const mapStateToProps = state =>(
{  stateAuth : state.auth }
)
//register
const mapDispatchToProps = {register}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage)
