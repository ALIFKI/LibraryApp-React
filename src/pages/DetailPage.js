import React,{ Component } from 'react';
import {PageHeader,Descriptions,Button} from 'antd'
import Style from '../styles/DetailPage/DetailPageStyle.module.css';
import { Container,Badge } from 'reactstrap';
import Card from '../components/Card'
import Axios from 'axios';
import openNotificationWithIcon from '../components/Notif';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getBookbyId, borrow } from '../redux/actions/book';
import { getTransaction } from '../redux/actions/history';
// import 'moment-timezone'
class DetailPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            book : {},
            status : this.props.book.book.status
        }
    }
    getData = () =>{
        let data = {
            id : this.props.match.params.id,
            token : this.props.auth.auth.token
        }
        this.props.getBookbyId(data).then((res)=>{
            this.setState({
                status : res.value.data.data.status
            })
        }).catch((err)=>{

        })
        // Axios({
        //     method : 'GET',
        //     url : `http://localhost:3000/api/books/${this.props.match.params.id}`,
        //     headers : {
        //         Authorization : localStorage.getItem('token')
        //     }
        // }).then((res)=>{
        //     console.log(res)
        //     this.setState({
        //         book : res.data.data,
        //         status : res.data.data.status
        //     })
        // }).catch((err)=>{
        //     console.log(err)
        // }).finally(

        // )
    }
    //handle borrow Books
    handleBook = ()=>{
        let data = {
            token : this.props.auth.auth.token,
            id : this.props.match.params.id
        }
        let fdata = {
            id : this.props.auth.auth.id,
            token : this.props.auth.auth.token
        }
        this.props.borrow(data).then((res)=>{
            console.log(res.value)
            this.setState({
                status : 'Borrowed'
            })
            this.props.getTransaction(fdata)
            openNotificationWithIcon('success','Borrow Success!!',res.value.data.msg)
        }).catch((err)=>{
            console.log(err)
            openNotificationWithIcon('success','Error!',err.response.data.msg)
        })
        // Axios({
        //     method : 'POST',
        //     headers : {
        //         Authorization : localStorage.getItem('token')
        //     },
        //     url : `http://localhost:3000/api/books/borrow/${this.props.match.params.id}`,
        //     data : {
        //         periode_of_time : 2
        //     }
        // }).then((res)=>{
        //     console.log(res.data.msg)
        //     this.setState({
        //         status : 'Unavailable'
        //     })
        //     openNotificationWithIcon('success','Borrow Success!!',res.data.msg)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }
    //
    rawMarkup(){
        var rawMarkup = this.props.book.book.description
        return { __html: rawMarkup };
    }

    componentDidMount(){
        this.getData()
    }

    render() {
        let button 
        if (this.state.status == 'Available') {
            button = <Button type="primary" onClick={this.handleBook}>Borrow</Button>
        }
        else{
            button = <Button type="primary" onClick={this.handleBook} disabled>Borrowed</Button>
        }
        return (
            <>
                <PageHeader
                    className={`${Style.PageHeader}`}
                    title={'Detail Page'}
                    onBack={()=>{this.props.history.goBack()}}
                    style={{backgroundColor: 'white'}}/>
                <Container fluid={true} className='w-100 h-100 themed-container'>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="d-flex flex-column justify-content-center">
                                <div className={`${Style.coverImage}`}>
                                    <img src={`http://localhost:3000/uploads/${this.props.book.book.image}`} alt="Nope"/>
                                </div>
                                <div className={`${Style.detail}`}>
                                    <div className={`${Style.text} pt-3`}>
                                        <div className={`${Style.genre}`}>
                                            <h4>
                                                <Badge variant="secondary">{this.props.book.book.genre}</Badge>
                                            </h4>
                                        </div>
                                            <h2> {this.props.book.book.title} </h2>
                                            <span dangerouslySetInnerHTML={this.rawMarkup()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 pr-0 pt-4">
                            <div className={`${Style.bookDetail} `}>
                                <div className={`d-flex flex-column justify-content-center align-items-center`}>
                                    <div className={`${Style.cardBook}`}>
                                        <img src={`http://localhost:3000/uploads/${this.props.book.book.image}`} alt='nope'/>
                                    </div>
                                    <div className="title">
                                        <h5>Title Book</h5>
                                    </div>
                                </div>
                                <div className={`${Style.description}`}>
                                    <Descriptions title="Detail Book">
                                        <Descriptions.Item label="Title">{this.props.book.book.title}</Descriptions.Item>
                                        <Descriptions.Item label="Author">{this.props.book.book.author}</Descriptions.Item>
                                        <Descriptions.Item label="Date"><Moment format="YYYY/MM/DD" date={this.props.book.book.created_at} /></Descriptions.Item>
                                    </Descriptions>
                                </div>
                                <div className="d-flex flex-row justify-content-center align-items-center pb-3">
                                    {button}
                                    {/* <Button>Default Button</Button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

const mapStateToProps = state=>({
    auth : state.auth,
    book : state.book
})
const mapDispatchToProps = {
    getBookbyId,
    borrow,
    getTransaction
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailPage)