/*
--- DESCRIPTION
File containing reducers used throughout app. 
*/

// CHANGE ACTIVITY SELECTED
function activityReducer (state, action) {
  switch (action.type) {
    case 'reload':
      return {activity: state.date};
    case 'update':
      return {activity: action.payload}
    default:
      throw new Error();
  }
}

// CHANGE TIMER MODE
function timerReducer (state,action) {
  switch (action.type) {
    case 'update':
      return {counter: action.payload}
    default:
      throw new Error();
  }
}


export {activityReducer, timerReducer};