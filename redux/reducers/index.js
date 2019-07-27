import basicState from '../store/basicState';

export default function testReducer(state = basicState, action) {
  switch (action.type) {
    case 'AREA_CHANGED':
      return { ...state, area: action.value };
    case 'PLANT_CHANGED':
      return { ...state, plant: action.value };
    default:
      return state;
  }
}
