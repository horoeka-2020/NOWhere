import React from 'react'
import { connect } from 'react-redux'

const App = () => {
    return (
        <div>
            <h1>WHAT UP WHAT UP</h1>
        </div>
    )
}

export default connect()(App)

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//       activePage: state.activePage
//     }
//   }
  
//   export default connect(mapStateToProps)(App)
  