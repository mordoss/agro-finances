function activeFieldReducer(state = {}, action) {
  if (action.type === 'SIGNIN') {
    const { uid, displayName, email, photoURL } = action.payload;
    return {
      isSigned: true,
      uid,
      displayName,
      email,
      photoURL
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
