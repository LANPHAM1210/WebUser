import React from 'react'
import Home from '../Home/home'
import RealmeContent from '../../components/realme/RealmeContent'

function Realme() {
  return <Home children={<RealmeContent />} link={'real-me'} /> 
}

export default Realme