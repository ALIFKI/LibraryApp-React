import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandigPage/LandingPage'
import SearchPage from './pages/SearchPage/SearchPaga';

function App() {
  const [isLoggin,setIsLoggin] = useState(false)

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      setIsLoggin(true)
      console.log(isLoggin)
    }
  })
  return (
    <>
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path="/details/page/:id" component={DetailPage}/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/' exact component={HomePage}/>
        <Route path='/home' exact component={LandingPage}/>
        <Route path='/search' exact component={SearchPage}/>
        {/* <Route exact path="/redirect">
            {isLoggin ? <SearchPage/> : <Redirect to="/dashboard" />}
        </Route> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
