import React from 'react'

function Memories () {
  return (

    <div className='albums'>
      <div className="frames">
        <img src='./images/cuba.jpg' className="polaroid" alt="image"/>
        <p className='city'>Havana sunset</p>
      </div>
      <div className="frames">
        <img src='./images/cuba2.jpg' className="polaroid" alt="image"/><p className='city'>Kitten</p>
      </div>
      <div className="frames">
        <img src='./images/cuba3.jpg' className="polaroid" alt="image"/><p className='city'>Beach </p>
      </div>
    </div>
  )
}

export default Memories
