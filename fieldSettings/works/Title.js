import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../../components';
import { theme } from '../../theme';

const Title = ({ name }) => {
  return (
    <Text center bold title white style={styles.workName}>
      {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  workName: {
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    backgroundColor: theme.colors.blue,
    padding: theme.sizes.base,
  },
});

export default Title;
