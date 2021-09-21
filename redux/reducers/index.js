import { combineReducers } from 'redux';
import activeFieldReducer from './activeFieldReducer';
import fieldsReducer from './fieldsReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  activeField: activeFieldReducer,
  products: productsReducer,
  fields: fieldsReducer
});

export default rootReducer;
