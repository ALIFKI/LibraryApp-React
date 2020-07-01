import React,{Component} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from './CarouselStyle.module.css'
import {Button} from 'reactstrap'
import Axios from 'axios';
export default class CarouselLanding extends Component {
    constructor(props){
        super(props)
        this.state = {
            book : []
        }
    }
    getData = ()=>{
        Axios({
            method : 'GET',
            url : 'http://localhost:3000/api/books?search=&page=1&limit=3&sort=0&by=title&order=created_at',
            headers: {
                Authorization : localStorage.getItem('token'),
            }
        }).then((res)=>{
            console.log(res)
            this.setState({
                book : res.data.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleOnclick=(id)=>()=>{
        this.props.history.push('/details/page/'+id)
    }
    componentWillMount(){
        this.getData()
    }
    render() {
        const settings = {
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding :'500px',
            adaptiveHeight: true
        }
        return (
            <div className="container">
            <Slider {...settings}>
                {
                    this.state.book.map((row,index)=>{
                        return <div className='slide-div d-flex flex-row justify-content-end' key={index}>
                        <div className={`${Style.cardBook}`}>
                            <img src={`http://localhost:3000/uploads/${row.image}`} alt="" />
                        </div>
                        <div className={`m-1 ${Style.title}`}>
                            <h3 className={`m-2`}> {row.title} </h3>
                            <p className={`Desc`}>
                                {row.description.substring(0,100)}...
                            </p>
                            <Button className={`btn right-btn ${Style.btnLogin} ${Style.fP}`} style={{backgroundColor: 'black'}} onClick={this.handleOnclick(row.id)}>detail</Button>
                        </div>
                    </div>
                    })
                }
            {/* <div className='slide-div d-flex flex-row'>
                <div className={`m-1 ${Style.title}`}>
                    <h3 className={`m-2`}>Ubur-Ubur Lembur</h3>
                </div>
                <div className={`${Style.cardBook}`}>

                </div>
            </div>
            <div className='slide-div d-flex flex-row'>
                <div className={`m-1 ${Style.title}`}>
                    <h3 className={`m-2`}>Ubur-Ubur Lembur</h3>
                </div>
                <div className={`${Style.cardBook}`}>

                </div>
            </div> */}
            </Slider>
          </div>
        )
    }
}