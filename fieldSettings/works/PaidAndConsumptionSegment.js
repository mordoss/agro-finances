import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch, Block, Input } from '../../components';
import {
  changePaid,
  changePaidPrice,
  changeOilConsumption,
} from '../../redux/actions/cammonWorkActions';
import { theme } from '../../theme';

const CommonWorkPartPaidAndConsumptionSegment = ({
  paid,
  field,
  workName,
  paidPrice,
  oilConsumption,
}) => {
  return (
    <Block style={styles.container}>
      <Switch
        label="Plaćam uslužno"
        value={paid}
        action={changePaid}
        field={field}
        workName={workName}
      />
      {paid ? (
        <Input
          price
          label="Cena uslužnog po hektaru"
          value={String(paidPrice)}
          action={changePaidPrice}
          field={field}
          workName={workName}
        />
      ) : (
        <Input
          oilConsumption
          label="Potrošnja nafte po hektaru"
          value={String(oilConsumption)}
          action={changeOilConsumption}
          field={field}
          workName={workName}
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

export default CommonWorkPartPaidAndConsumptionSegment;
