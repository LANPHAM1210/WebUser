import React from 'react'
import Home from '../Home/home'
import DienThoaiContent from '../../components/dien thoai/DienThoaiContent'

function DienThoai(){
    return <Home children={<DienThoaiContent />} link={'dien-thoai'} />
}

export default DienThoai