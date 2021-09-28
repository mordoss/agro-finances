import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import Firebase from '../config/firebase';

WebBrowser.maybeCompleteAuthSession();

const useAuth = () => {
  const dispatch = useDispatch();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: Constants.manifest.extra.webClientId
  });

  useEffect(() => {
    if (response?.type === 'success') {
      // eslint-disable-next-line camelcase
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      Firebase.auth()
        .signInWithCredential(credential)
        .then(credentials =>
          dispatch({ type: 'SIGNIN', payload: credentials.user })
        );
    }
  }, [response]);

  const signout = () => {
    Firebase.auth()
      .signOut()
      .then(() => dispatch({ type: 'SIGNOUT' }));
  };

  return { promptAsync, request, signout };
};

export default useAuth;
