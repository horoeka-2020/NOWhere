import React from 'react'
import { connect } from 'react-redux'

function Memories () {
  return (
    <div>
      <h1 className ='title'>Lez take a walk down memory lane...</h1>
    </div>
  )
}

export default connect()(Memories)