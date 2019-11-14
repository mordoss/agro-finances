import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';
import { setInputUnit } from '../helperFunctions';

const Input = ({ label, price, area, oilConsumption, bags, value, field, action, workName }) => {
  const dispatch = useDispatch();
  const allUnits = { price, area, oilConsumption, bags };
  const unit = setInputUnit(allUnits);

  return (
    <Block row style={styles.container}>
      <Text gray>{label}</Text>
      <TextInput
        value={value}
        onChangeText={eventValue => dispatch(action(field, eventValue, workName))}
        style={styles.input}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
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
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    height: theme.sizes.base * 1.5,
    paddingHorizontal: theme.sizes.base,
    marginHorizontal: theme.sizes.base / 2,
    textAlign: 'center',
  },
});
