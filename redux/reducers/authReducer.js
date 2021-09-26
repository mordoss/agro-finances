function activeFieldReducer(state = {}, action) {
  if (action.type === 'SIGNIN') {
    return {
      isSigned: true,
      uid: action.payload
    };
  }
  if (action.type === 'SIGNOUT') {
    return {
      isSigned: false,
      uid: null
    };
  }
  return state;
}

export default activeFieldReducer;
