import React from 'react';
import { StyleSheet } from 'react-native';
import Block from './Block';
import Text from './Text';
import { theme } from '../theme';

const SubTotal = () => {
  return (
    <Block style={styles.subTotalContainer}>
      <Text gray style={{ marginTop: theme.sizes.base }}>
        Ukupno: _____ din
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  subTotalContainer: {
    marginTop: theme.sizes.base,
    alignItems: 'flex-end',
  },
});

export default SubTotal;
