import React from 'react';
import { StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const CustomSwitch = ({ label, value, action, workName, field, turn }) => {
  const dispatch = useDispatch();

  return (
    <Block row style={styles.container}>
      <Text gray style={styles.label}>
        {label}
      </Text>
      <Switch onChange={() => dispatch(action(field, workName, value, turn))} value={value} />
    </Block>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  // label: { marginRight: theme.sizes.base / 2 },
});
