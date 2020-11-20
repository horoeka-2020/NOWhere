const initialLocationListState = {
  locations: []
}
// Step 4 - Current state and action
const locationReducer = (state = initialLocationListState, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      // Step 5 - Return a new state
      return {
        locations: [...state.locations, action.locations]
      }

    default:
      return state
  }
}

export default locationReducer
