import { createStore } from 'redux';
import rootReducer from '../reducers';
import wholeState from './wholeState';

const store = createStore(rootReducer, wholeState);

export default store;
