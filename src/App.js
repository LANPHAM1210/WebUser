import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Resigter from './pages/resigter';
import Forgotpassword from './pages/forgotpassword';
import Home from './pages/Home/home';
import DienThoai from './pages/Layout/DienThoai';
import Iphone from './pages/Layout/Iphone';
import Oppo from './pages/Layout/Oppo';
import Samsung from './pages/Layout/Samsung';
import Realme from './pages/Layout/Realme';
import Redmi from './pages/Layout/Redmi';
import Reno8T from './components/san pham/sp oppo/Reno8T';
import Giohang from './pages/giohang';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resigter' element={<Resigter />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/dien-thoai' element={<DienThoai />} />
        <Route path='/iphone' element={<Iphone />} />
        <Route path='/sam-sung' element={<Samsung />} />
        <Route path='/oppo' element={<Oppo />} />
        <Route path='/real-me' element={<Realme />} />
        <Route path='/red-mi' element={<Redmi />} />
        <Route path='/gio-hang' element={<Giohang />} />
        <Route path='/reno8T' element={<Reno8T />} />
      </Routes>
    </div>
  );
}

export default App;
