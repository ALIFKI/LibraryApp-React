import React,{ Component } from 'react';
import {PageHeader,Input,Select,Skeleton,Pagination} from 'antd'
import {Switch, List, Avatar } from 'antd';
import { Container, Card } from 'reactstrap';
import Style from './SearchPageStyle.module.css';
import CardSearch from '../../components/CardSearch/Card'
import CardBook from '../../components/Card'
import axios from 'axios'
import { connect } from 'react-redux';
const {Search } = Input
const { Option } = Select

class SearchPage extends Component {
    constructor(){
        super()
        this.state = {
            user : {},
            isLoading : false,
            books : [],
            by : 'title',
            sort : 0,
            order : 'title',
            search : '',
            totalPage : 1,
            total_data : 0,
            current : 1,
            limit : 10,
        }
    }
    onPaginate=()=>{
        console.log('res')
    }
    //

    //onchange
    handleChange = (e)=>{
        this.setState({
            search : e.target.value
        })
    }
    handleOnSearch = (e)=>{
        this.setState({
            isLoading : true,
        })
        this.getAll()
        this.props.history.push(`?search=${this.state.search}&page=${this.state.current}&limit=${this.state.limit}&sort=${this.state.sort}&by=${this.state.by}&order=${this.state.order}`)
    }
    getAll = ()=>{
        axios({
            method: 'GET',
            headers : {
                Authorization : this.props.auth.auth.token
            },
            url : `http://localhost:3000/api/books?search=${this.state.search}&page=${this.state.current}&limit=${this.state.limit}&sort=${this.state.sort}&by=${this.state.by}&order=${this.state.order}`
        }).then(
            (res)=>{
                console.log(res)
                this.setState({
                    books : res.data.data,
                    totalPage: res.data.pageInfo.total_page,
                    total_data : res.data.data.length*res.data.pageInfo.total_page
                })
                console.log(this.state)
            }
        )
        .catch(
            (err)=>{
                console.log(err.response)
            }
        ).finally(
            this.setState({
                isLoading : false
            })
        )

   }
   getPage = (page)=>{
        axios({
            method: 'GET',
            headers : {
                Authorization : this.props.auth.auth.token
            },
            url : `http://localhost:3000/api/books?search=${this.state.search}&page=${page}&limit=${this.state.limit}&sort=${this.state.sort}&by=${this.state.by}&order=${this.state.order}`
        }).then(
            (res)=>{
                console.log(res)
                this.setState({
                    books : res.data.data,
                })
                console.log(this.state)
            }
        )
        .catch(
            (err)=>{
                console.log(err.response)
            }
        ).finally(
            this.setState({
                isLoading : false
            })
        )

    }

    handleByOnChange = (e)=>{
        this.setState({
        by : e
        })
    }
    handleSortOnChange = (e)=>{
        this.setState({
        sort : e
        },(e)=>{
            this.getAll()
        })
    }
    async onVange(page) {
        try {
            this.setState({
                current: page,
              });
            const data = await this.getPage()
        } catch (error) {
            console.log(error)
        }
    }
    onChange = page => {
        this.setState({
            current : page
        },this.getPage(page))
      };
    getUser = ()=>{
        this.setState({
            user : JSON.parse(localStorage.getItem('userData'))
        })
    }
    handleOnDelete = (id)=>()=>{
        console.log('res')
        // var arr = [...this.state.book]
        // arr.splice(id, 1);
        // this.setState({book: arr});
    }
    componentDidMount() {
        this.getUser()
        // document.addEventListener('scroll', this.handleScroll);
      }
    //   handleScroll() {
    //     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    //     const body = document.body;
    //     const html = document.documentElement;
    //     const docHeight = Math.round(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //     const windowBottom = windowHeight + window.pageYOffset;
    //     if (windowBottom >= docHeight) {
    //         console.log('bottom')
    //     } else {

    //     }
    // }
    render() {
        let pagination;
        let Card;
        if (this.state.totalPage>1) {
            pagination = <Pagination current={this.state.current} onChange={this.onChange} total={this.state.total_data} pageSize={this.state.limit} />
        }
        else{
            pagination = <div className="l"></div>
        }
        if(this.state.user.role == 1){

        }
        else{

        }
        
        return (
            <>
            <Container fluid>
                <PageHeader
                    className={``}
                    title={'Search Page'}
                    onBack={()=>{this.props.auth.auth.role == 1 ? this.props.history.push('/dashboard') : this.props.history.push('/home')}}
                    style={{backgroundColor: 'white'}}/>
                    <div className="row">
                        <div className="col-md-12 justify-content-center align-items-center">
                            <div className={`${Style.search}`}>
                                    <Search
                                    placeholder="Search Book"
                                    enterButton="Search"
                                    style={{width: '60%',paddingRight: '10px'}}
                                    size="medium"
                                    onChange={(e)=>{this.setState({search : e.target.value})}}
                                    onSearch={value=> this.handleOnSearch(value) }
                                    />
                                    <div style={{width:'10%',padding : '0px 5px'}}>
                                        <label>By</label>
                                        <Select onChange={this.handleByOnChange} optionFilterProp="children" defaultValue='title' style={{paddingLeft: '5px'}}>
                                        <Option value='title'>title</Option>
                                        <Option value='author'>author</Option>
                                        <Option value='genre'>genre</Option>
                                        </Select>
                                    </div>
                                    <div style={{width:'10%',padding : '0px 5px'}}>
                                        <label>Sort</label>
                                        <Select onChange={this.handleSortOnChange} optionFilterProp="children" defaultValue='0' style={{paddingLeft: '5px'}} >
                                        <Option value='0'>A-Z</Option>
                                        <Option value='1'>Z-A</Option>

                                        </Select>
                                    </div>

                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-12">
                                <h3>Result</h3>
                            </div>
                        </div> */}
                        <div className="row justify-content-center">
                            <div className="col-md-12 d-flex flex-wrap justify-content-center align-items-center p-5">
                                {
                                    this.state.books.map((row,index)=>{
                                        if(this.props.auth.auth.role == 1){
                                            return <CardBook i={index} key={row.id} data={row} history={this.props.history} onDelete={this.handleOnDelete}/>
                                        }
                                        else{
                                        return <CardSearch key={row.id} data={row} history={this.props.history}/>
                                        }
                                    })
                                }
                            </div>
                            <div style={{width:'60%'}}>
                            <Skeleton loading={this.state.isLoading} active>

                            </Skeleton>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                            {pagination}
                        </div>
                    </div>
                
            </Container>
            </>
        )
    }
}
const mapStateToProps = state =>({
    auth : state.auth
})
export default connect(mapStateToProps)(SearchPage)