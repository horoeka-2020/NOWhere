import React from 'react'
import { connect } from 'react-redux'

const Location = (props) => {
  return (
    <>
      <div className="frame">
        <a href="#" className='city'><img src='./images/chicago.jpg' className="polaroid" alt="image"/>Chicago</a>
      </div>
    </>
  )
}

export default connect()(Location)