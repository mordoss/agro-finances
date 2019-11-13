import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';
import { setInputUnit } from '../helperFunctions';

const Input = ({
  label,
  price,
  area,
  oilConsumption,
  bags,
  value,
  field,
  action,
  propertyName,
}) => {
  const dispatch = useDispatch();
  const unit = setInputUnit(price, area, oilConsumption, bags);

  return (
    <Block row style={styles.container}>
      <Text gray>{label}</Text>
      <TextInput
        value={value}
        onChangeText={eventValue => dispatch(action(field, eventValue, propertyName))}
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
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.base,
    height: theme.sizes.base * 2,
    flexBasis: theme.sizes.base * 4,
    marginHorizontal: theme.sizes.base / 2,
  },
});
