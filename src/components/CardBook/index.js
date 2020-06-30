import React,{ Component } from 'react';
import Style from './CardBook.module.css'
class CardBook extends Component {
    constructor(props){
        super(props)

        console.log(this.props)
    }
    render() {
        return (
            <div>
                <div className={`${Style.card}`} >
                        <div className={`${Style.block}`} onClick={(e)=>{this.props.history.push('/details/page/1')}}>
                            <div className={`${Style.blockContent}`}>
                                <h3>Title</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div> 
                </div>  
            </div>
        )
    }
}

export default CardBook