import React,{ Component } from 'react'
import { Card } from 'antd'
import { EditOutlined,DeleteOutlined,LoadingOutlined } from '@ant-design/icons'
import Style from '../styles/Card/CardStyle.module.css'
import openNotificationWithIcon from './Notif'
import Axios from 'axios'
class CardBook extends Component {
    constructor(props){
        super(props)
        this.state ={
            title : 'Ubur Ubur Lembur',
            desc : 'Lorem Ipsum',
            deleteLoading : false
        }
    }
    //slice 
    handleslice = (msg) =>{
        this.props.onDelete(this.props.i)
    }
    //deleteBook
    handleOnDelete = (id)=>()=>{
        this.setState({
          deleteLoading : true
        })
        Axios({
            method : 'DELETE',
            url : 'http://localhost:3000/api/books/'+id,
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then(
            (res)=>{
                openNotificationWithIcon('success','success',res.data.msg)
        }).catch((err)=>{
            console.log(err)
        }).finally(     
            this.props.onDelete(this.props.i)
        )
      }
    render() {
        const { Meta } = Card;
        return (
            <div className={`${Style.cardBook}`} onClick={(e)=>{
                e.target.className === 'detail'?
                this.props.history.push(`/details/page/${this.props.data.id}`) : console.log('res')
            }}>
            <Card
            className='detail'
            hoverable
            style={{ width: 230,overflow: 'hidden'}}
            cover={<img alt="Picture" src={`http://localhost:3000/uploads/${this.props.data.image}`} className='detail'/>}>
                <div className={`${Style.float} ${Style.edit}`} onClick={(e)=>{console.log('edit')}}>
                    <EditOutlined style={{fontSize: '20px'}}/>
                </div>
                <div className={`${Style.float} ${Style.delete}`} onClick={this.handleOnDelete(this.props.data.id)}>
                    {this.state.deleteLoading? <LoadingOutlined/> : <DeleteOutlined/>}
                </div>
            <Meta title={this.props.data.title} description={this.props.data.desc} />
          </Card>
          </div>
        )
    }
}

export default CardBook