import React,{ Component } from 'react'
import InputStyle from '../styles/InputStyle.module.css'

class InputLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            data : '',
            image : []
        }
    }
    componentWillMount(){
        this.setState({
            data : this.props.value
        })
        console.log(this.state)
    }
    componentDidMount(){

    }
    render(){
        let input
        if(this.props.type === 'file'){
            input = <input type={this.props.type} required={this.props.required ? 'required' : ''} onChange={(e)=>{this.setState({image : e.target.files});console.log('res')}} className={InputStyle.input}/>
        }
        else{
            input = <input type={this.props.type} required={this.props.required ? 'required' : ''} onChange={(e)=>{this.setState({data : e.target.value});console.log(this.state)}} className={InputStyle.input} value={this.state.data}/>
        }
        return(
            
            <div className={InputStyle.group}>
                    {input}<span className={InputStyle.highlight}></span><span className={InputStyle.bar} ref="stepOneName"></span>
                <label className={InputStyle.label}>{this.props.name}</label>
            </div>
        )
    }
}

export default InputLogin