import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const Input = props => {
  const { label, price, area, oilConsumption, bags, value, changeValue } = props;

  // eslint-disable-next-line no-nested-ternary
  const unit = price ? 'dinara' : area ? 'ara' : oilConsumption ? 'litara' : bags ? 'džakova' : '';

  const renderLabel = () => {
    return <Block flex={false}>{label ? <Text gray>{label}</Text> : null}</Block>;
  };

  return (
    <Block row style={styles.inputBlock}>
      {renderLabel()}
      <TextInput
        value={value}
        onChangeText={e => changeValue(e)}
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
