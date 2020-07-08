import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandigPage/LandingPage'
import SearchPage from './pages/SearchPage/SearchPaga';
import {connect} from 'react-redux';

const Auth = {
  isLogin:false,
  OnAuth(){
      this.isLogin = false
  },
  getLog(){
    if (true) {

      this.isLogin = true
    }
      return this.isLogin
  }
}
const SecureRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    (props) => (
  Auth.getLog() == true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )
} />
)

function App(props) {

  return (
    <>
    <Router>
      <Switch>
        {/* <SecureRoute path='/login' component={LoginPage} /> */}
        <Route path='/login' component={LoginPage}/>
        <SecureRoute path="/details/page/:id" component={DetailPage} login='da'/>
        <Route path='/register' component={RegisterPage}/>
        <SecureRoute path='/dashboard' exact component={HomePage}/>
        <SecureRoute path='/home' exact component={LandingPage}/>
        <SecureRoute path='/search' exact component={SearchPage}/>
        {/* <Route exact path="/redirect">
            {isLoggin ? <SearchPage/> : <Redirect to="/dashboard" />}
        </Route> */}
      </Switch>
    </Router>
    </>
  );
}
const mapStateToProps = state =>({
  user : state.auth 
})
export default connect(mapStateToProps)(App);
