import React,{ Component } from 'react'
import { Button,Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from '../styles/LoginStyle.module.css'
import { Link } from 'react-router-dom'
import Logo from '../images/bookshelf.png'
import { notification } from 'antd';
import InputLogin from '../components/Input';
import axios from 'axios'

class LoginPage extends Component {
    constructor(props,refs){
        super(props,refs)
        this.state = {
          isLoading : false,
        }
        //get Ref From Child input
        this.textInput = React.createRef();
        this.passwordInput = React.createRef()
    }
    //Handle Login
    handleLogin = (event)=>{
      this.state.isLoading = true
      event.preventDefault();
      axios({
          method: 'POST',
          url : 'http://localhost:3000/api/users/login',
          data : {
              email : this.textInput.current.state.data,
              password : this.passwordInput.current.state.data
          }
      }).then(
          (res)=>{
              localStorage.setItem('token',res.data.data[0].token)
              localStorage.setItem('refreshToken',res.data.data[0].refreshToken)
          }
      )
      .catch(
          (err)=>{
              console.log(err.response.data.msg)
              this.openNotification(err.response.data.msg,'Error')
          }
      )
      .finally(
        console.log('detail')
      )
 }
    openNotification = (msg,title) => {
      // console.log(this.textInput.current.state.data)
      // console.log(this.passwordInput.current.state.data)
      notification.open({
        message: title,
        description:
          msg,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };
    render(){
        return(
            <Container fluid={true} className={`h-100`}>
              <Row>
                <Col md='7' className={`p-0 ${Style.remove}`}>
                  <div className={`d-flex flex-column w-100 h-100`}>
                      <div className={Style.coverImage}>
                        <h2 className={Style.textwhite}>Book is The Window to The Universe</h2>
                          <div className={Style.textblock}>
                          </div>
                      </div>
                  </div>
                </Col>
                <Col md='5'>
                    <div className='d-flex flex-column w-100 h-100'>
                      <div className='d-flex justify-content-end'>
                        <img className='p-3' src={Logo} alt='Logo' />
                      </div>
                      <div className='flex-grow-1 d-flex justify-content-center align-items-center p-3'>
                        <Form className='login-form mb-5' onSubmit={this.handleLogin}>
                            <div className={Style.title}>
                                <h1>Login</h1>
                                <p>Welcome Back, Please Login to your account!</p>
                            </div>
                          <div className='input-wrapper no-gutter'>
                            <InputLogin name={'Email'} required={true} placeholder={'Email'} type={'email'} value={this.state.username} ref={this.textInput}/>
                            <InputLogin name={'Password'} required={true} placeholder={'Password'} type={'password'} value={this.state.password} ref={this.passwordInput}/>
                            </div>
                          <div className={`d-flex flex-row justify-content-between mt-4 ${Style.fP}`}>
                            <FormGroup check>
                              <Label check>
                                <Input type='checkbox' className={`p-2 pr-5`}/>
                                <span>Remember Me</span>
                              </Label>
                            </FormGroup>
                            <div><Link to='/admin' className={Style.a}>Administrator</Link></div>
                          </div>
                          <div className='mt-4 mb-5 pb-4 pt-3'>
                            <Button className={`btn right-btn ${Style.btnLogin} ${Style.fP}`} type='submit' style={{backgroundColor: 'black'}}>Login</Button>
                            <Link className={`btn left-btn ml-2 ${Style.btnInfo} ${Style.fP}`} to='/register'>Register</Link>
                          </div>
                          <div className={`d-flex flex-column mt-5 pt-5 ${Style.fP}`}>
                            <div className={`p-6`}>By signing up, you agree to Library</div>
                            <div> <a href='/' className={Style.a}>Terms and Conditions</a> &amp; <a href='/' className={Style.a}>Privacy Policy</a></div>
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

export default LoginPage