function productsReducer(state = 0, action) {
  if (action.type === 'PRICE_CHANGED') {
    const { property, product, value } = action;
    return {
      ...state,
      [property]: {
        ...state[property],
        [product]: [value, ...state[property][product].slice(1)]
      }
    };
  }
  return state;
}

export default productsReducer;
