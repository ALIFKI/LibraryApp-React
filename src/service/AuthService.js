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
export default SecureRoute


