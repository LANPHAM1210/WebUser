import React, { useState } from 'react';
import { Layout, Space, Input, Button, theme} from 'antd';
import './home.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, 
         CarryOutOutlined,
         UserAddOutlined,
       } from '@ant-design/icons';

const items=[
    {
      key: '1',
      label: 'ĐIỆN THOẠI',
      link:'/dien-thoai',
    },
    {
      key: '2',
      label: 'IPHONE',
      link:'/iphone',
    },
    {
      key: '3',
      label: 'SAMSUNG',
      link:'/sam-sung',
    },
    {
      key: '4',
      label: 'OPPO',
      link:'/oppo',
    },
    {
      key:'5',
      label: 'REALME',
      link: '/real-me',
    },
    {
      key:'6',
      label: 'REDMI',
      link: '/red-mi',
    },
]

const { Search } = Input;
const onSearch = (value) => console.log(value);

const { Header, Footer, Content } = Layout;

const Home = ({children, link}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
      navigate(`/${link}`)
  };
  return (
    <div>
      <Space direction="vertical" style={{width: '100%'}}>
        <Layout>
        <h3 className='header-text-1'>Chào mừng đến với thế giới smartphone với muôn ngàn ưu đãi</h3>
        <Header className='header'>
          <div className='header-line-1'>
            <Link to={'/dien-thoai'}>
            <img src='' alt='Logo' />
            </Link>
            <h1 className='header-text-2'>Smart</h1>
            <h2 className='header-text-3'>phone</h2>
            <Search className='header-input'
              placeholder="Hôm nay bạn cần gì ?"
              onSearch={onSearch}
              style={{
              width: 450}} />
            <Button className='header-putton'>
              <CarryOutOutlined />
              Kiểm tra đơn hàng
            </Button>
            <Link to={'/gio-hang'}>
              <div className='header-icon'><ShoppingCartOutlined /></div>
            </Link>
            <Link to={'/resigter'}>
              <div className='header-icon-1'><UserAddOutlined /></div>
              </Link>
            </div>
            <div className='header-main'>
            {items.map((item) => (
              <div key={item.key} className='header-link'>
                <Link to={item.link} style={{marginLeft: '103px'}}>
                  {item.icon}
                    <span className='header-link-label'>{item.label}</span>
                </Link>
              </div>
            ))}
            </div>
        </Header>
        <Content className='content'>
            {children}
      </Content>
      <Footer>
        <div className='footer'>
          <div className='footer-line-1'>
            <img src='https://fptshop.com.vn/dien-gia-dung/Content/desktop/images/g1.png' alt='anh-1' />
            <h3>Thương hiệu đảm bảo</h3>
            <h5>Sản phẩm chính hãng</h5>
          </div>
          <div className='footer-line-2'>
            <img src='https://fptshop.com.vn/dien-gia-dung/Content/desktop/images/g2.png' alt='anh-2' />
            <h3 >Đổi trả dễ dàng</h3>
            <h5>Thủ tục đổi trả dễ dàng</h5>
          </div>
          <div className='footer-line-3'>
            <img src='https://fptshop.com.vn/dien-gia-dung/Content/desktop/images/g3.png' alt='anh-3' />
            <h3>Giao hàng tận nơi</h3>
            <h5>Miễn phí vận chuyển toàn quốc</h5>
          </div>
          <div className='footer-line-4'>
            <img src='https://fptshop.com.vn/dien-gia-dung/Content/desktop/images/g4.png' alt='anh-4' />
            <h3>Sản phẩm chất lượng</h3>
            <h5>Hotline hỗ trợ 1900.2091</h5>
          </div>
        </div>
        
        <div className='footer-1'>
          <div className='footer-text-1'>
            <h3>Hỗ trợ - Dịch vụ</h3>
            <h4>Mua hàng trả góp</h4>
            <h4>Tra cứu đơn hàng</h4>
            <h4>Chính sách bảo hành</h4>
            <h4>Chính sách bảo mật</h4>
            <h4>Câu hỏi thường gặp</h4>
          </div>
          <div className='footer-text-1'>
            <h3>Bán hàng online</h3>
            <h4>Chăm sóc khách hàng</h4>
            <h4>Trung tâm bảo hành</h4>
          </div>
          <div className='footer-text-1'>
              <h3>Thanh toán miễn phí</h3>
              <h4>Giao hàng tận nơi</h4>
              <h4>Thanh toán khi nhận hàng</h4>
          </div>
          <div className='footer-text-1'>
            <h3>Hình thức vận chuyển</h3>
            <img src='https://fptshop.com.vn/Content/v4/images/ft-img2.png' alt='anh-2' />
          </div>
        </div>
      </Footer>
      </Layout>
      </Space>
    </div>
  )
}

export default Home