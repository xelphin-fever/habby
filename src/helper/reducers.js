


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

export {colorReducer};