import React,{ Component } from 'react'
import { Button,Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Style from '../styles/LoginStyle.module.css'
import { Link } from 'react-router-dom'
import Logo from '../images/bookshelf.png'
import { AutoComplete,notification } from 'antd';
import InputLogin from '../components/Input';
class LoginPage extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
          isLoading : true
        }
    }
    openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
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
                        <Form className='login-form mb-5' >
                            <div className={Style.title}>
                                <h1 onClick={this.openNotification}>Login</h1>
                                <p>Welcome Back, Please Login to your account!</p>
                            </div>
                          <div className='input-wrapper no-gutter'>
                            <InputLogin name={'Email'} required={true} placeholder={'Email'} type={'email'}/>
                            <InputLogin name={'Password'} required={true} placeholder={'Password'} type={'password'}/>
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

export default LoginPage