import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const Input = ({ label, unit, value, actionArgumentObject, action }) => {
  const dispatch = useDispatch();

  return (
    <Block row style={styles.container}>
      <Text gray>{label}</Text>
      <TextInput
        value={value}
        onChangeText={eventValue => dispatch(action(actionArgumentObject, eventValue))}
        style={styles.input}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
      />
      <Text gray2>{unit}</Text>
    </Block>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius / 2,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    height: theme.sizes.base * 1.5,
    paddingHorizontal: theme.sizes.base,
    marginHorizontal: theme.sizes.base / 2,
    textAlign: 'center',
  },
});
