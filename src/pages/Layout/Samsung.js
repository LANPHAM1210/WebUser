import React from 'react'
import Home from '../Home/home'
import SamsungContent from '../../components/samsung/SamsungContent'

function Samsung() {
  return <Home children={<SamsungContent />} link={'sam-sung'} />
}

export default Samsung