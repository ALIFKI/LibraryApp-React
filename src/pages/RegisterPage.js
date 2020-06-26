import React,{ Component } from 'react';
import { Button,Container, Row, Col, Form } from 'reactstrap';
import Style from '../styles/RegisterStyle.module.css'
import { Link } from 'react-router-dom'
import Logo from '../images/bookshelf.png'
// import {notification } from 'antd';
import InputLogin from '../components/Input';

class RegisterPage extends Component {
    constructor(props){
        super(props)
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
                <Form className='login-form mb-5' >
                    <div className={Style.title}>
                        <h1 onClick={this.openNotification}>Register</h1>
                        <p>Welcome Back, Please Register to Create account!</p>
                    </div>
                  <div className='input-wrapper no-gutter'>
                    <InputLogin name={'Usename'} required={true} placeholder={'Usename'} type={'text'}/>
                    <InputLogin name={'Full Name'} required={true} placeholder={'Full Name'} type={'text'}/>
                    <InputLogin name={'Email'} required={true} placeholder={'Email'} type={'email'}/>
                    <InputLogin name={'Password'} required={true} placeholder={'Password'} type={'password'}/>
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

export default RegisterPage