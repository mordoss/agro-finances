import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers';
import wholeState from './wholeState';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  wholeState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

export { store, persistor };
