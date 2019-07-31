import basicState from '../store/basicState';
import groundWorksState from '../store/workStates/groundWorksState';
import sowingState from '../store/workStates/sowingState';
import sprayingState from '../store/workStates/sprayingState';

const stateComplete = { ...basicState, ...groundWorksState, ...sowingState, ...sprayingState };

export default function testReducer(state = stateComplete, action) {
  switch (action.type) {
    case 'AREA_CHANGED':
      return { ...state, area: action.value };
    case 'PLANT_CHANGED':
      return { ...state, plant: action.value };
    default:
      return state;
  }
}
