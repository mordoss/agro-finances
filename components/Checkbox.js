import React from 'react';
import { StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

import { theme } from '../theme';
import Block from './Block';
import Text from './Text';

const { colors } = theme;

const CheckboxCustom = ({ value, setValue, label }) => {
  return (
    <Block row center>
      <Checkbox
        style={styles.checkbox}
        value={value}
        onValueChange={setValue}
        color={value ? colors.primary : colors.accent}
      />
      <Text>{label}</Text>
    </Block>
  );
};

export default CheckboxCustom;

const styles = StyleSheet.create({});
