function activeFieldReducer(state = 0, action) {
  if (action.type === 'FIELD_CHANGED') {
    return action.field;
  }
  return state;
}

export default activeFieldReducer;
