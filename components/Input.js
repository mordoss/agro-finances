import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const { colors, sizes } = theme;

const Input = ({
  label,
  unit,
  value,
  actionArgumentObject,
  action,
  customStyle,
  style
}) => {
  const dispatch = useDispatch();
  const [onFocus, setOnFocus] = useState(false);

  return (
    <Block row style={[styles.container, customStyle, style]}>
      <Text gray>{label}: </Text>
      <TextInput
        value={value}
        onChangeText={eventValue =>
          dispatch(action(actionArgumentObject, eventValue))
        }
        onFocus={() => setOnFocus(true)}
        onEndEditing={() => setOnFocus(false)}
        style={[
          styles.input,
          {
            borderColor: onFocus ? colors.primary : colors.gray,
            borderWidth: onFocus ? 2 : StyleSheet.hairlineWidth
          }
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
    marginVertical: sizes.base / 2
  },
  input: {
    borderRadius: 5,
    backgroundColor: colors.white,
    height: sizes.base * 1.5,
    paddingHorizontal: sizes.base,
    marginHorizontal: sizes.base / 2,
    textAlign: 'center'
  }
});
