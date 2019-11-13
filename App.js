import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './navigation';
import { Block } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <Block style={styles.container}>
        <Navigation />
      </Block>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
