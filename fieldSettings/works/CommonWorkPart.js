import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Switch, Block, Input, SubTotal } from '../../components';

import { theme } from '../../theme';

const CommonWorkPart = props => {
  const { work, children } = props;
  return (
    <Block flex={false}>
      <Text center bold h1 gray style={styles.workName}>
        {work.name}
      </Text>
      <Block>
        <Switch label="Urađeno" />
        <Switch label="Planiram" />
      </Block>
      <Input oilConsumption label="Potrošnja nafte po hektaru" />
      {children}
      <Block style={styles.paidContainer}>
        <Switch label="Plaćam uslužno" />
        <Input price label="Cena uslužnog po hektaru" />
      </Block>
      <SubTotal />
    </Block>
  );
};
const styles = StyleSheet.create({
  workName: {
    marginBottom: theme.sizes.base,
  },
  paidContainer: {
    marginTop: theme.sizes.base,
  },
});

export default CommonWorkPart;
