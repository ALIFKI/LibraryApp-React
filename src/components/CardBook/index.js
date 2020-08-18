import React,{ Component } from 'react';
import Style from './CardBook.module.css'
class CardBook extends Component {
    constructor(props){
        super(props)

        // console.log(this.props)
    }
    rawMarkup(){
        var rawMarkup = this.props.data.description.substring(0,100)
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div>
                <div className={`${Style.card}`} >
                    <img src={`${process.env.REACT_APP_URL_API}uploads/${this.props.data.image}`} alt=""/>
                        <div className={`${Style.block}`} onClick={(e)=>{this.props.history.push('/details/page/'+this.props.data.id)}}>
                            <div className={`${Style.blockContent}`}>
                                <h5> {this.props.data.title.substring(0,20)} </h5>
                                <span dangerouslySetInnerHTML={this.rawMarkup()} />
                            </div>
                        </div> 
                </div>  
            </div>
        )
    }
}

export default CardBook