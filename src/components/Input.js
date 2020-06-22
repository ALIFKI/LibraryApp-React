import React,{ Component } from 'react'
import InputStyle from '../styles/InputStyle.module.css'

class InputLogin extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={InputStyle.group}>
                <input type={this.props.type} required={this.props.required ? 'required' : ''} className={InputStyle.input}/><span className={InputStyle.highlight}></span><span className={InputStyle.bar}></span>
                <label className={InputStyle.label}>{this.props.name}</label>
            </div>
        )
    }
}

export default InputLogin