import React from 'react';
import { Switch, LayoutAnimation, UIManager, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';

const CustomSwitch = ({ label, action, actionArgumentObject, withAnimation }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(action(actionArgumentObject));
    if (withAnimation) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  };

  return (
    <Block row style={styles.container}>
      <Switch onValueChange={handleClick} value={actionArgumentObject.value} />
      <Text gray style={styles.label}>
        {label}
      </Text>
    </Block>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
