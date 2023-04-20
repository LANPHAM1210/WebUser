import React from 'react'
import Home from '../Home/home'
import OppoContent from '../../components/oppo/OppoContent'

function Oppo() {
  return <Home children={<OppoContent />} link={'oppo'} />
}

export default Oppo