import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch, Block, Input } from '../../components';
import {
  changePaid,
  changePaidPrice,
  changeOilConsumption,
} from '../../redux/actions/cammonWorkActions';
import { theme } from '../../theme';

const PaidAndConsumptionSegment = ({ actionArgumentObject, paid, paidPrice, oilConsumption }) => {
  return (
    <Block style={styles.container}>
      <Switch
        label="Plaćam uslužno"
        action={changePaid}
        actionArgumentObject={{ ...actionArgumentObject, value: paid }}
      />
      {paid ? (
        <Input
          label="Cena uslužnog po hektaru"
          unit="dinara"
          action={changePaidPrice}
          actionArgumentObject={{ ...actionArgumentObject, value: String(paidPrice) }}
        />
      ) : (
        <Input
          label="Potrošnja nafte po hektaru"
          unit="litara"
          action={changeOilConsumption}
          actionArgumentObject={{ ...actionArgumentObject, value: String(oilConsumption) }}
        />
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base,
  },
});

export default PaidAndConsumptionSegment;
