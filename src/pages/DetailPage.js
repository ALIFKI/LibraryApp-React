import React,{ Component } from 'react';
import {PageHeader,Descriptions,Button} from 'antd'
import Style from '../styles/DetailPage/DetailPageStyle.module.css';
import { Container,Badge } from 'reactstrap';
import Card from '../components/Card'


class DetailPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : ''
        }
    }

    render() {
        return (
            <>
                <PageHeader
                    className={`${Style.PageHeader}`}
                    title={'Details Page'}
                    onBack={()=>{
                        this.props.history.goBack()
                }}/>
                <Container fluid={true} className='w-100 h-100 themed-container'>
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="d-flex flex-column justify-content-center">
                                <div className={`${Style.coverImage}`}>
                                    <img src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg" alt="Nope"/>
                                </div>
                                <div className={`${Style.detail}`}>
                                    <div className={`${Style.text} pt-3`}>
                                        <div className={`${Style.genre}`}>
                                            <h4>
                                            <Badge variant="secondary">Novel</Badge>
                                            </h4>
                                        </div>
                                        <h2>Books Titel</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem neque est corporis quae eos, fugit amet repellat vel sit, vitae mollitia, asperiores optio reprehenderit ratione rem id eum quaerat rerum.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 pr-0 pt-4">
                            <div className={`${Style.bookDetail} `}>
                                <div className={`d-flex flex-column justify-content-center align-items-center`}>
                                    <div className={`${Style.cardBook}`}>
                                        <img src="https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg" alt='nope'/>
                                    </div>
                                    <div className="title">
                                        <h5>Title Book</h5>
                                    </div>
                                </div>
                                <div className={`${Style.description}`}>
                                    <Descriptions title="Detail Book">
                                        <Descriptions.Item label="Title">Title Book</Descriptions.Item>
                                        <Descriptions.Item label="Author">J.K Rowling</Descriptions.Item>
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
                    <div className="row h-100">
                        <div className="d-flex flex-column justify-content-start">
                            <Card data={{title : 'helo',desc:'sfdsfs'}} history={this.props.history}/>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}

export default DetailPage