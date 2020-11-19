import React from 'react'

import { Route } from 'react-router-dom'
import Header from './Header'
import LocationList from './Location'

import { connect } from 'react-redux'

const App = () => {
  return (
    <div>
      <h1>WHAT UP WHAT UP</h1>
      <Route path='/' render={() => { return <LocationList locations={locations} /> }} />
    </div>
  )
}
export default connect()(App)

// function App (props) {
//   return (
//     <div className='app'>
//       <Header />
//       <Location images={images} store={props.store} />
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//       activePage: state.activePage
//     }
//   }

//   export default connect(mapStateToProps)(App)
