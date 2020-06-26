import React,{ Component } from 'react'
import { Card } from 'antd'
import Style from '../styles/Card/CardStyle.module.css'
class CardBook extends Component {
    constructor(props){
        super(props)
        this.state ={
            title : 'Ubur Ubur Lembur',
            desc : 'Lorem Ipsum'
        }
    }
    render() {
        const { Meta } = Card;
        return (
            <div className={`${Style.cardBook}`}>
            <Card
            hoverable
            style={{ width: 230,}}
            cover={<img alt="Picture" src="facebook.jpg"/>}
            onClick={(e)=>{
                this.props.history.push('/details/page/1')
            }}
          >
            <Meta title={this.props.data.title} description={this.props.data.desc} />
          </Card>
          </div>
        )
    }
}

export default CardBook