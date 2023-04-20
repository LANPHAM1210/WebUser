import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Login() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw'}}>
    <div style={{width: '30vw', height: '60vh', justifyContent: 'center', alignItems: 'center'}}>
        <img src='' alt='Logo' style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}/>
        <h2 style={{fontWeight:'unset', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>Đăng nhập trang Smartphone</h2>
        <div style={{border: '0 solid black', borderRadius: '10px 10px 10px 10px',marginTop: '30px',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFE8ED'}}> 
            <div style={{marginTop: '25px'}}>
            <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                required: true,
                message: 'Please input your email!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            <Link to="/forgotpassword">
                <h5 style={{fontWeight: 'unset', color: 'blue', margin: '7px 0 0 95px'}}>Quên mật khẩu ?</h5>
            </Link>
            </Form.Item>
            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Link to={'/dien-thoai'}>
            <Button type="primary" htmlType="đăng nhập">
                Đăng nhập
            </Button>
            </Link>
            </Form.Item>
        </Form>
        </div>    
        </div>
        <div style={{border: '0 solid black', marginTop: '15px', borderRadius: '10px 10px 10px 10px', justifyContent: 'center', display: 'flex', alignItems: 'center', padding: '10px 0 10px 0', backgroundColor: '#EFE8ED'}}>
            <h5 style={{fontWeight: 'unset'}}>Chưa có tài khoản ?</h5>
            <Link to="/resigter" style={{textDecoration: 'none'}}>
                <h5 style={{fontWeight: 'unset', color: 'blue', paddingLeft: '5px'}}>Đăng kí tại đây</h5>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Login