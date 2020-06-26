import React,{ Component } from 'react'
import InputStyle from '../styles/InputStyle.module.css'

class InputLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            data : '',
        }
    }

    render(){
        return(
            <div className={InputStyle.group}>
                <input type={this.props.type} required={this.props.required ? 'required' : ''} value={this.state.data} onChange={(e)=>{this.setState({data : e.target.value})}} className={InputStyle.input}/><span className={InputStyle.highlight}></span><span className={InputStyle.bar} ref="stepOneName"></span>
                <label className={InputStyle.label}>{this.props.name}</label>
            </div>
        )
    }
}

export default InputLogin