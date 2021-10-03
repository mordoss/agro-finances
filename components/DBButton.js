import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const { colors, sizes } = theme;

const DBButton = ({ uid, thunk, dispatch, title, primary }) => {
  return (
    <Block row center flex={false}>
      <TouchableOpacity
        onPress={() => dispatch(thunk(uid))}
        style={[
          styles.button,
          { backgroundColor: primary ? colors.primary : colors.blue }
        ]}
      >
        <Text white center>
          {title}
        </Text>
      </TouchableOpacity>
    </Block>
  );
};

export default DBButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: sizes.base / 2,
    elevation: 10
    // marginTop: sizes.base
  }
});
