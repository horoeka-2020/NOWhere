import React from 'react'

import { connect } from 'react-redux'

function Header () {
  return (
    <div className='header'>
      <h1><span className=""></span> NOWhere <span className=""></span></h1>
    </div>
  )
}

export default connect()(Header)
