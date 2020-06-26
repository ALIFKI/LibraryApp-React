import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path="/details/page/:id" component={DetailPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/' component={HomePage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
