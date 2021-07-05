
// FIX: Best to do activity Id reducer and then you can collect both color and title

// CHANGE COLOR SELECTED
function colorReducer (state, action) {
  switch (action.type) {
    case 'reload':
      return {color: state.date};
    case 'update':
      return {color: action.payload}
    default:
      throw new Error();
  }
}

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
    case 'start':
      return {active: true}
    case 'stop':
      return {active: false}
    default:
      throw new Error();
  }
}




export {colorReducer, activityReducer, timerReducer};