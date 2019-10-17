import React from 'react';
import { StyleSheet, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';
import { setSwitchActiveColor } from '../helperFunctions';

const CustomSwitch = props => {
  const dispatch = useDispatch();
  const { label, value, action, propertyName, field, turn } = props;
  const activeColor = setSwitchActiveColor(
    label,
    theme.colors.primary,
    theme.colors.secondary,
    theme.colors.tertiary
  );

  return (
    <Block row style={styles.checkBoxBlock}>
      <Text gray style={{ marginRight: theme.sizes.base }}>
        {label}
      </Text>
      <Switch
        onChange={() => dispatch(action(field, propertyName, value, turn))}
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
