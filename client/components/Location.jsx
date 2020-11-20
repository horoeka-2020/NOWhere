import React from 'react'
import { connect } from 'react-redux'

const Location = (props) => {
  const { location } = props
  return (
    <>
      <div className="frame">
  <a href="#" className='city'><img src={location.polaroid} className="polaroid" alt="image"/>{location.name}</a>
      </div>
    </>
  )
}

export default connect()(Location)