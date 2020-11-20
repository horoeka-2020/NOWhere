import React from 'react'
import { connect } from 'react-redux'
import Location from './Location'
import locations from '../../data/locations'

class LocationList extends React.Component {
  render () {
    const Arr = locations.locations
    console.log(Arr)
    return (
      <>
        <div className='photowrapper'>
          {Arr.map((location) => <Location key={location.id} location={location}/>)}
        </div>
      </>
    )
  }
}

export default connect()(LocationList)
