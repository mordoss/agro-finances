function priceReducer(state = 0, action) {
  if (action.type === 'PRICE_CHANGED') {
    return {
      ...state,
      [action.property]: {
        ...state[action.property],
        [action.product]: action.value,
      },
    };
  }
  return state;
}

export default priceReducer;
