import React from 'react'
import {Button,Checkbox,Col,Form,Input,Row,} from 'antd';
import { Link } from 'react-router-dom';

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


function Resigter() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw'}}>
    <div style={{width: '30vw', height: '60vh', justifyContent: 'center', alignItems: 'center'}}>
        <img src='' alt='Logo' style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}/>
        <h2 style={{fontWeight: 'unset', fontFamily: '', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>Đăng kí tài khoản Smartphone</h2>
        <div style={{border: '0 solid black', borderRadius: '10px 10px 10px 10px',marginTop: '30px',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFE8ED'}}> 
            <div style={{marginTop: '25px'}}>
       <Form.Item
        name="mật khẩu"
        label="Họ tên"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="mật khẩu"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nhập lại mật khẩu"
        label="Xác nhận mật khẩu"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <div style={{paddingLeft: '100px', border: '0 solid black', marginTop: '25px', borderRadius: '10px 10px 10px 10px', justifyContent: 'center', display: 'flex', alignItems: 'center', backgroundColor: '#EFE8ED'}}>
            <h5 style={{fontWeight: 'unset'}}>Đã có tài khoản ?</h5>
            <Link to="/login" style={{textDecoration: 'none'}}>
                <h5 style={{fontWeight: 'unset', color: 'blue', paddingLeft: '5px'}}>Đăng nhập tại đây</h5>
            </Link>
      </div>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{marginTop: '30px'}}>
          Đăng kí
        </Button>
      </Form.Item>
    </div>
    </div>    
        </div>
    </div>
  )
}

export default Resigter