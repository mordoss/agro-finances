import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './navigation';
import { store, persistor } from './redux/store';

const App = () => {
  // persistor.purge();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
