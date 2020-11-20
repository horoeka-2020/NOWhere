import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import LocationList from './LocationList'
import Memories from './Memories'

import { connect } from 'react-redux'

const App = (props) => {
  return (
    <>
      <div className='container'>
        <Route path='/' render={() => {
          return <Header target={props.target} />
        }} />
        <LocationList locations={props} />

        <Route path='/4' render={() => {
          return <Memories />
        }} />
      </div>
    </>
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
