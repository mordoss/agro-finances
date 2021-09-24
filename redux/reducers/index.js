import { combineReducers } from 'redux';
import activeFieldReducer from './activeFieldReducer';
import fieldsReducer from './fieldsReducer';
import productsReducer from './productsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  activeField: activeFieldReducer,
  products: productsReducer,
  fields: fieldsReducer
});

export default rootReducer;
