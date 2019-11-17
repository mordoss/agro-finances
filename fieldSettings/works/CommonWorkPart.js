import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Switch, Block, Input, SubTotal } from '../../components';
import * as actions from '../../redux/actions/cammonWorkActions';
import { theme } from '../../theme';

const CommonWorkPart = ({ field, name, work, workName, children }) => {
  const { changeDone, changePlaning, changePaid, changePaidPrice, changeOilConsumption } = actions;
  const { done, planing, paid, paidPrice, oilConsumption } = work;

  return (
    <Block flex={false}>
      <Text center semibold title gray style={styles.workName}>
        {name}
      </Text>

      <Block>
        <Switch
          label="Urađeno"
          value={done}
          action={changeDone}
          field={field}
          workName={workName}
        />
        <Switch
          label="Planiram"
          value={planing}
          action={changePlaning}
          field={field}
          workName={workName}
        />
      </Block>

      {children}

      <Block style={styles.paidContainer}>
        <Switch
          label="Plaćam uslužno"
          value={paid}
          action={changePaid}
          field={field}
          workName={workName}
        />
        {work.paid ? (
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

      <SubTotal />
    </Block>
  );
};

const styles = StyleSheet.create({
  workName: {
    marginBottom: theme.sizes.base,
  },
  paidContainer: {
    marginVertical: theme.sizes.base,
  },
});

export default CommonWorkPart;
