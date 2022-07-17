import { Button, Form, Input } from 'antd';
import uniqid from 'uniqid';
import React from 'react';
import { useDispatch} from 'react-redux';
import { addPost } from '../../redux/module/action';



const CreatePost = () => {
    const dispatch = useDispatch();
    const onSubmit = (values) => {
      if(values.title && values.body !== ''){
        dispatch(addPost(values.title, values.body))
      }
        
    }
    return (
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onSubmit}

    >
      <Form.Item
        label="title"
        name="title"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="body"
        name="body"
      >
        <Input/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
};

export default CreatePost;