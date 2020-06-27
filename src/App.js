import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandigPage/LandingPage'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path="/details/page/:id" component={DetailPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/' exact component={HomePage}/>
        <Route path='/home' exact component={LandingPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
