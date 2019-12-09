import React from 'react';
import { StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';

const CustomSwitch = ({ label, action, actionArgumentObject }) => {
  const dispatch = useDispatch();

  return (
    <Block row style={styles.container}>
      <Text gray style={styles.label}>
        {label}
      </Text>
      <Switch
        onChange={() => dispatch(action(actionArgumentObject))}
        value={actionArgumentObject.value}
      />
    </Block>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
