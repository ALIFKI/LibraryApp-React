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
import GenrePage from './pages/GenrePage';
import AuthorPage from './pages/Author'

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
function getAuth (props){
  return true
}
const SecureRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    (props) => (
      console.log(props),
  getAuth(props) == true
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
        {
      props.user.isLogin ? (
        <>
        <SecureRoute path="/details/page/:id" component={DetailPage} login='da'/>
        <SecureRoute path='/dashboard' exact component={HomePage}/>
        <SecureRoute path='/genre' exact component={GenrePage}/>
        <SecureRoute path='/author' exact component={AuthorPage}/>
        <SecureRoute path='/home' exact component={LandingPage}/>
        <SecureRoute path='/search' exact component={SearchPage}/>
        </>
      ) : (
        <>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/' exact component={LoginPage}/>
        </>
      )
    }
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
export default connect(mapStateToProps)(App,getAuth);
