import React from 'react';
import { StyleSheet } from 'react-native';

import { Block, Input } from '../../components';

import { theme } from '../../theme';

const Area = () => {
  return (
    <Block style={styles.area} middle>
      <Input area label="Površina njive: " />
    </Block>
  );
};

const styles = StyleSheet.create({
  area: {
    marginHorizontal: theme.sizes.base * 3,
    marginVertical: theme.sizes.base / 2,
  },
});

export default Area;
