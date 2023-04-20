import React from 'react'
import Home from '../Home/home'
import RedmiContent from '../../components/redmi/RedmiContent'

function Redmi() {
  return <Home children={<RedmiContent />} link={'red-mi'} />
}

export default Redmi