import { Drawer, Space,Avatar,Input,Select,Upload,notification } from 'antd';
import React,{ Component } from 'react'
import { Form,Button } from 'reactstrap';
import Style from "./DrawerInputStyle.module.css";
import InputLogin from '../Input';
import {
PlusOutlined,UploadOutlined
} from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import Axios from 'axios';
import openNotificationWithIcon from '../../components/Notif' 

const { Option } = Select;

class DrawerInput extends Component {
    constructor(props,refs){
        super(props,refs)
        this.state = { 
          data : {
            author : [],
            genre : []
          },
          visible: false, 
          placement: 'right',
          active : '',
          content : '',
          title : '',
          image : '',
          genre : '',
          author : '',
          status : '',
       };
       //get Ref from Child Component
       this.textInput = React.createRef();
       this.image = React.createRef();
    }
    componentDidMount(){
      this.getAllAuthor();
      this.getAllGenre()
    }

    getAllAuthor = ()=>{
      Axios({
        method : 'GET',
        url : 'http://localhost:3000/api/authors?search=&limit=200&page=1&sort=0&by=author',
        headers : {
          Authorization : localStorage.getItem('token')
      },
      }).then((res)=>{
        this.setState({
          data : {
            ...this.state.data,
            author : res.data.data
          }
        })
        console.log(this.state)
      }).catch((err)=>{
        console.log(err)
      }).finally(
      )
    }
    getAllGenre = ()=>{
      Axios({
        method : 'GET',
        url : 'http://localhost:3000/api/genres?search=&page=1&limit=10&sort=0&by=genre',
        headers : {
          Authorization : localStorage.getItem('token')
      },
      }).then((res)=>{
        this.setState({
          data : {
            ...this.state.data,
            genre : res.data.data
          }
        })
        console.log(this.state)
      }).catch((err)=>{
        console.log(err)
      }).finally(
      )
    }
    openNotification = () => {
        notification.open({
          message: 'helo',
          description:
            'msg',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };
    showDrawer = () => {
      this.setState({
        visible: true,
        active : 'is-active'
      });
    };

    onClose = () => {
      this.setState({
        visible: false,
        active : ''
      });
    };

    onChange = e => {
      this.setState({
        placement: e.target.value,
      });
    };
    //genreSelect
    handleGenreOnChange = (e)=>{
      this.setState({
        genre : e
      })
    }
    //status
    handleStatusOnChange = (e)=>{
      this.setState({
        status : e
      })
    }
    //authorSelect
    handleAuthorOnChange = (e)=>{
      console.log(e)
      this.setState({
        author : e
      })
    }
    //handel Tiny mCe change
    handleEditorChange = (content,editor)=>{
        this.setState({
            content : content
        })
    }
    //handel Form submit
    handleOnsubmit = (event) =>{
      event.preventDefault();
      console.log(this.state)
      const formData = new FormData()
      formData.append('title',this.textInput.current.state.data);
      formData.append('image',this.image.current.state.image[0]);
      formData.append('id_genre',this.state.genre);
      formData.append('id_author',this.state.author);
      formData.append('description',this.state.content);
      formData.append('status',this.state.status)
      Axios({
        method : 'POST',
        url : 'http://localhost:3000/api/books',
        data : formData,
        headers : {
          'Content-Type' : 'multipart/form-data',
          Authorization : localStorage.getItem('token')
        }
      }).then(
        (res)=>{
          console.log(res)
          openNotificationWithIcon('success','Success',res.data.msg)
          this.setState({
            visible : false
          })
        }
      ).catch(
        (err)=>{
          openNotificationWithIcon('error','Error',err.response)
        }
      ).finally(
      )

    }

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Space>
          <div className={`${Style.buttonRound}`}>
              <PlusOutlined onClick={this.showDrawer}/>
          </div>
        </Space>
        <Drawer
          width={500}
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
          // maskStyle={{opacity:0,backgroundColor: 'rgba(0, 0, 0, 0.0)'}}
        >
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3 onClick={this.openNotification}>Add Book</h3>
                <Form onSubmit={this.handleOnsubmit}>
                <InputLogin name={'title'} required={true} placeholder={'Title Book'} type={'text'} value={this.state.username} ref={this.textInput}/>
                <label>Descriptions</label>
                <Editor
                    apiKey = '9p428y16wndt918ysp9mhdxaxxba0vn0ho2o7wzv3otznk5i'
                    initialValue=''
                    init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={this.handleEditorChange}
                />
                    <Input.Group compact>
                        <label>Genre</label>
                        <Select onChange={this.handleGenreOnChange} optionFilterProp="children" style={{width:'100%'}}>
                          {this.state.data.genre.map((res)=>{
                            return <Option key={res.id_genre} value={res.id_genre}>{res.genre}</Option>
                          })}
                        </Select>
                    </Input.Group>
                    <Input.Group compact>
                        <label>Status</label>
                        <Select onChange={this.handleStatusOnChange} optionFilterProp="children" style={{width:'100%'}}>
                          <Option value='Available'>Available</Option>
                          <Option value='Unavailable'>Unavailable</Option>
                        </Select>
                    </Input.Group>
                    <Input.Group compact>
                        <label>Author</label>
                        <Select
                          showSearch
                          style={{ width: '100%' }}
                          placeholder="Select a Author"
                          optionFilterProp="children"
                          onChange={this.handleAuthorOnChange}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {
                            this.state.data.author.map((res)=>{
                            return <Option key={res.id_author} value={res.id_author}>{res.author}</Option>
                            })
                          }
                        </Select>
                    </Input.Group>
                        
                  <InputLogin name={'Cover'} required={true} placeholder={''} type={'file'} value={''} ref={this.image} />
                <Button className={`btn right-btn ${Style.btnLogin} ${Style.fP}`} type='submit' style={{backgroundColor: 'black'}}>Create</Button>
                </Form>

            </div>
        </Drawer>
      </>
    );
  }
}

export default DrawerInput
