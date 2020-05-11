import { combineReducers } from 'redux';
import activeFieldReducer from './activeFieldReducer';
import createFieldReducer from './fieldReducer';
import pricesReducer from './pricesReducer';

const rootReducer = combineReducers({
  activeField: activeFieldReducer,
  prices: pricesReducer,
  field0: createFieldReducer('field0'),
  field1: createFieldReducer('field1'),
  field2: createFieldReducer('field2'),
  field3: createFieldReducer('field3'),
});

export default rootReducer;
