import React from 'react';
import { StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const CustomSwitch = props => {
  const dispatch = useDispatch();
  const { label, value, action, propertyName, field, turn } = props;

  return (
    <Block row style={styles.checkBoxBlock}>
      <Text gray style={{ marginRight: theme.sizes.base }}>
        {label}
      </Text>
      <Switch onChange={() => dispatch(action(field, propertyName, value, turn))} value={value} />
    </Block>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  checkBoxBlock: {
    alignItems: 'center',
  },
});
