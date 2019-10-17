import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';
import { setInputUnit } from '../helperFunctions';

const Input = props => {
  const dispatch = useDispatch();
  const { label, price, area, oilConsumption, bags, value, field, action, propertyName } = props;
  const unit = setInputUnit(price, area, oilConsumption, bags);

  const renderLabel = () => {
    return <Block flex={false}>{label ? <Text gray>{label}</Text> : null}</Block>;
  };

  return (
    <Block row style={styles.inputBlock}>
      {renderLabel()}
      <TextInput
        value={value}
        onChangeText={e => dispatch(action(field, e, propertyName))}
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
  inputBlock: {
    alignItems: 'center',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    paddingHorizontal: theme.sizes.base,
    height: theme.sizes.base * 2,
    flexBasis: theme.sizes.base * 4,
    marginHorizontal: theme.sizes.base / 2,
  },
});
