import {Redirect, Router} from 'react-router-dom'
import React from 'react'


const Auth = {
    isLogin:false,
    OnAuth(){
        this.isLogin = true
    },
    getLog(){
        return this.isLogin
    }
}

function SecureRoute(props) {
    return (<Router path={props.path} render={data=>Auth.getLog()?
        (<props.component {...data}></props.component>):
        (<Redirect to={{pathname: '/'}}></Redirect>)}/>)
    
}

function validateUsername(params) {
    var cekUser = new RegExp(/\S+@\S+\.\S+/);
    return {
        data : Boolean(params.match(cekUser)),
        msg : 'Username Invalid'
    }
}

function validatePassword(params) {
    var cekPass   = new RegExp(/^[0-9A-Za-z!@#$%^&*]{8,}$/);
    return {
        data : Boolean(params.match(cekPass)),
        msg : 'Password Invalid'
    }
}

function validateName(params){
    var cekName = new RegExp(/^[0-9A-Za-z!@#$%^&*]{3,}$/)
    return {
        data : Boolean(params.match(cekName)),
        msg : 'Name Invalid'
    }
}

export default ()=> {
    return {
        SecureRoute,
        validatePassword,
        validateUsername,
        validateName    
    }
}


