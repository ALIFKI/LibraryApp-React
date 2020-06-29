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
const { Option } = Select;

class DrawerInput extends Component {
    constructor(props,refs){
        super(props,refs)
        this.state = { 
          visible: false, 
          placement: 'right',
          active : '',
          content : '',
          title : '',
          image : '',
          genre : '',
          author : '',
       };
       //get Ref from Child Component
       this.textInput = React.createRef();
       this.image = React.createRef();
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
    formData.append('genre',this.state.genre);
    formData.append('author',this.state.author);
    formData.append('descriptions',this.state.content);
    Axios({
      method : 'POST',
      url : 'url',
      data : formData,
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    }).then(
      (res)=>{
        console.log(res)
      }
    ).catch(
      (err)=>{
        console.log(err)
      }
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
                            <Option value="Zhejiang">Zhejiang</Option>
                            <Option value="2">Jiangsu</Option>
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
                          <Option value="1">Jack</Option>
                          <Option value="2">Lucy</Option>
                          <Option value="3">Tom</Option>
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
