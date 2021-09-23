import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import firebase from 'firebase';
import { Button } from 'react-native';

import Navigation from './navigation';
import { store, persistor } from './redux/store';
import Firebase from './config/firebase';

WebBrowser.maybeCompleteAuthSession();

const App = () => {
  // persistor.purge();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Constants.manifest.extra.webClientId
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      // eslint-disable-next-line camelcase
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      Firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
        <Button
          disabled={!request}
          title="Login"
          onPress={() => {
            promptAsync();
          }}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
