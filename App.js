import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './navigation';
import { Block } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <Block>
        <Navigation />
      </Block>
    </Provider>
  );
};

export default App;
