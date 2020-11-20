import React from 'react'
import { connect } from 'superagent'
import Location from './Location'

const LocationList = (props) => {
  return (
    <>
      <div className='photowrapper'>
        {props.locations.locations.map((location) => <Location key={location.id} location={location}/>)}
      </div>
    </>
  )
}

export default connect()(LocationList)
