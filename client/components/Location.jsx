import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Location = (props) => {
  const { location } = props
  return (
    <>
      <div className="frame">
        <Link to={`/${location.id}`} className='city'><img src={location.polaroid} className="polaroid" alt="image"/>{location.name}</Link>
      </div>
    </>
  )
}

export default connect()(Location)
