import React from 'react'

import { connect } from 'react-redux'

function Header () {
  return (
    <div>
      <h1 className ='title'>From Nowhere &#8669; Now Here!!!</h1>
    </div>
  )
}

export default connect()(Header)
