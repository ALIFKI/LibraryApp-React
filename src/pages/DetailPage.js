import React,{ Component } from 'react';
import {PageHeader,Descriptions,Button} from 'antd'
import Style from '../styles/DetailPage/DetailPageStyle.module.css';
import { Container,Badge } from 'reactstrap';
import Card from '../components/Card'
import Axios from 'axios';


class DetailPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            book : {}
        }
    }
    getData = () =>{
        Axios({
            method : 'GET',
            url : `http://localhost:3000/api/books/${this.props.match.params.id}`,
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log(res)
            this.setState({
                book : res.data.data
            })
        }).catch((err)=>{
            console.log(err)
        }).finally(

        )
    }
    //handle borrow Books
    handleBook = ()=>{
        
    }
    //
    rawMarkup(){
        var rawMarkup = this.state.book.description
        return { __html: rawMarkup };
    }

    componentDidMount(){
        this.getData()
    }

    render() {
        return (
            <>
                <PageHeader
                    className={`${Style.PageHeader}`}
                    title={'Details Page'}
                    onBack={()=>{this.props.history.goBack()}}
                    style={{backgroundColor: 'white'}}/>
                <Container fluid={true} className='w-100 h-100 themed-container'>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="d-flex flex-column justify-content-center">
                                <div className={`${Style.coverImage}`}>
                                    <img src={`http://localhost:3000/uploads/${this.state.book.image}`} alt="Nope"/>
                                </div>
                                <div className={`${Style.detail}`}>
                                    <div className={`${Style.text} pt-3`}>
                                        <div className={`${Style.genre}`}>
                                            <h4>
                                                <Badge variant="secondary">{this.state.book.genre}</Badge>
                                            </h4>
                                        </div>
                                            <h2> {this.state.book.title} </h2>
                                            <span dangerouslySetInnerHTML={this.rawMarkup()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 pr-0 pt-4">
                            <div className={`${Style.bookDetail} `}>
                                <div className={`d-flex flex-column justify-content-center align-items-center`}>
                                    <div className={`${Style.cardBook}`}>
                                        <img src={`http://localhost:3000/uploads/${this.state.book.image}`} alt='nope'/>
                                    </div>
                                    <div className="title">
                                        <h5>Title Book</h5>
                                    </div>
                                </div>
                                <div className={`${Style.description}`}>
                                    <Descriptions title="Detail Book">
                                        <Descriptions.Item label="Title">{this.state.book.title}</Descriptions.Item>
                                        <Descriptions.Item label="Author">{this.state.book.author}</Descriptions.Item>
                                        <Descriptions.Item label="Date">12 Jan 2001</Descriptions.Item>
                                    </Descriptions>
                                </div>
                                <div className="d-flex flex-row justify-content-center align-items-center pb-3">
                                    <Button type="primary">Borrow</Button>
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

export default DetailPage