function activeFieldReducer(state = 0, action) {
  if (action.type === 'SIGNIN') {
    return true;
  }
  if (action.type === 'SIGNOUT') {
    return false;
  }
  return state;
}

export default activeFieldReducer;
