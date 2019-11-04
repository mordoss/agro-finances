import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const InputWithincrementer = ({
  label,
  fertilization,
  min,
  max,
  value,
  action,
  turn,
  propertyName,
  field,
}) => {
  const dispatch = useDispatch();
  const unit = fertilization ? 'kg' : 'cm';

  return (
    <Block style={styles.container}>
      <Text>Incrementer placeholder</Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.sizes.base,
  },
});

export default InputWithincrementer;
