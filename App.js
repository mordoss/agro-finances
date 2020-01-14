import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Navigation from './navigation';
import { Block } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Block>
          <Navigation />
        </Block>
      </PersistGate>
    </Provider>
  );
};

export default App;
