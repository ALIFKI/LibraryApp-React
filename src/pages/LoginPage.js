import React,{ Component } from 'react'
import { Button,Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Style from '../styles/LoginStyle.module.css'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../images/bookshelf.png'
import { notification } from 'antd';
import InputLogin from '../components/Input';
import { login } from '../redux/actions/auth'
// import axios from 'axios';
import {connect} from 'react-redux';
import openNotificationWithIcon from '../components/Notif'
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
      event.preventDefault();
      const data = {
        username : this.textInput.current.state.data,
        password : this.passwordInput.current.state.data
      }
      // console.log(data)
      this.props.login(data).then((res)=>{
        // localStorage.setItem('token',res.value.data.data[0].token)
        // localStorage.setItem('refreshToken',res.value.data.data[0].refreshToken)
        // localStorage.setItem('userData',JSON.stringify(res.value.data.data[0]))
        console.log(res.value.data.data[0].role)
        if (res.value.data.data[0].role == 2) {
            this.props.history.push('/home')
        }
        else{
          this.props.history.push('/dashboard')
        }

      }).catch((err)=>{
        console.log(err.response)
       openNotificationWithIcon('error','Error',err.response.data.msg)
      })
      // axios({
      //     method: 'POST',
      //     url : 'http://localhost:3000/api/users/login',
      //     data : {
      //         email : this.textInput.current.state.data,
      //         password : this.passwordInput.current.state.data
      //     }
      // }).then(
      //     (res)=>{
      //         localStorage.setItem('token',res.data.data[0].token)
      //         localStorage.setItem('refreshToken',res.data.data[0].refreshToken)
      //         localStorage.setItem('userData',JSON.stringify(res.data.data[0]))
      //         if(res.data.data[0].role == 1){
      //           this.props.history.push('/dashboard')
      //         }
      //         else{
      //           this.props.history.push('/home')
      //         }
                
      //     }
      // )
      // .catch(
      //     (err)=>{
      //         console.log(err.response.data.msg)
      //         this.openNotification(err.response.data.msg,'Error')
      //     }
      // )
      // .finally(
      //   console.log('detail')
      // )
 }
    componentDidMount(){

    }
    render(){
      // console.log(this.props.auth)
        return(
            <Container fluid={true}>
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
                                <h1 onClick={this.openNotification}>Login</h1>
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
const mapStateToProps = (state)=>(
{
  auth : state.auth
}
)

const mapDispatchToProps = {login}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)