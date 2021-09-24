import firebase from 'firebase';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './navigation';
import { store, persistor } from './redux/store';

const App = () => {
  // persistor.purge();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User email: ', user.email);
      }
    });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
