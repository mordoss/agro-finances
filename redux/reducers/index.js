import { combineReducers } from 'redux';
import activeFieldReducer from './activeFieldReducer';
import createFieldReducer from './fieldReducer';

const rootReducer = combineReducers({
  activeField: activeFieldReducer,
  field0: createFieldReducer('field0'),
  field1: createFieldReducer(1),
  field2: createFieldReducer(2),
  field3: createFieldReducer(3),
});

export default rootReducer;
