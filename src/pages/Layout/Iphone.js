import React from 'react'
import Home from '../Home/home'
import IphoneContent from '../../components/iphone/IphoneContent'

function Iphone() {
  return <Home children={<IphoneContent />} link={'iphone'} />
}

export default Iphone