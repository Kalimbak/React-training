import React from 'react'
import './imageheader.css'
import profile from '../../resources/images/magend.png'

function ImageHeader() {
  return (
    <header className="img-header">
      <img src={profile} alt="" />
    </header>
  )
}

export default ImageHeader
