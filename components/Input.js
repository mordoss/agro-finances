import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const Input = ({ label, unit, value, actionArgumentObject, action, customStyle }) => {
  const dispatch = useDispatch();
  const [onFocus, setOnFocus] = useState(false);

  return (
    <Block row style={[styles.container, customStyle]}>
      <Text gray>{label}</Text>
      <TextInput
        value={value}
        onChangeText={eventValue => dispatch(action(actionArgumentObject, eventValue))}
        onFocus={() => setOnFocus(true)}
        onEndEditing={() => setOnFocus(false)}
        style={[
          styles.input,
          {
            borderColor: onFocus ? theme.colors.primary : theme.colors.gray,
            borderWidth: onFocus ? 2 : StyleSheet.hairlineWidth,
          },
        ]}
        keyboardType="numeric"
      />
      <Text gray>{unit}</Text>
    </Block>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: theme.sizes.base / 2,
  },
  input: {
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    height: theme.sizes.base * 1.5,
    paddingHorizontal: theme.sizes.base,
    marginHorizontal: theme.sizes.base / 2,
    textAlign: 'center',
  },
});
