function activeFieldReducer(state = {}, action) {
  if (action.type === 'SIGNIN') {
    return {
      isSigned: true,
      email: action.payload
    };
  }
  if (action.type === 'SIGNOUT') {
    return {
      isSigned: false,
      email: null
    };
  }
  return state;
}

export default activeFieldReducer;
