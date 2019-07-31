import React from 'react';
import { StyleSheet, Switch } from 'react-native';

import Text from './Text';
import Block from './Block';

import { theme } from '../theme';

const CustomSwitch = props => {
  const { label, value } = props;

  const activeColor =
    // eslint-disable-next-line no-nested-ternary
    label === 'Urađeno'
      ? theme.colors.secondary
      : label === 'Planiram'
      ? theme.colors.primary
      : theme.colors.tertiary;

  return (
    <Block row style={styles.checkBoxBlock}>
      <Text gray style={{ marginRight: theme.sizes.base }}>
        {label}
      </Text>
      <Switch
        value={value}
        trackColor={{
          false: theme.colors.gray,
          true: activeColor,
        }}
        thumbColor={activeColor}
      />
    </Block>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  checkBoxBlock: {
    alignItems: 'center',
    // marginVertical: theme.sizes.base / 2,
  },
});
