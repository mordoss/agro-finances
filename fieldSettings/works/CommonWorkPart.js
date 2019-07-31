import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Switch, Block, Input, SubTotal } from '../../components';

import { theme } from '../../theme';

const CommonWorkPart = props => {
  const { work, children, name } = props;
  return (
    <Block flex={false}>
      <Text center bold h1 gray style={styles.workName}>
        {name}
      </Text>

      <Block>
        <Switch label="Urađeno" value={work.done} />
        <Switch label="Planiram" value={work.planing} />
      </Block>

      {!work.paid && (
        <Input oilConsumption label="Potrošnja nafte po hektaru" value={`${work.consumption}`} />
      )}

      {children}

      <Block style={styles.paidContainer}>
        <Switch label="Plaćam uslužno" value={work.paid} />
        {work.paid && <Input price label="Cena uslužnog po hektaru" value={`${work.paidPrice}`} />}
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
