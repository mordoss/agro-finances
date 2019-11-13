import React from 'react';
import { StyleSheet } from 'react-native';
import * as actions from '../../redux/actions/cammonWorkActions';
import { Text, Switch, Block, Input, SubTotal } from '../../components';
import { theme } from '../../theme';

const CommonWorkPart = ({ field, name, work, workName, children }) => {
  return (
    <Block flex={false}>
      <Text center bold h1 gray style={styles.workName}>
        {name}
      </Text>

      <Block>
        <Switch
          label="Urađeno"
          value={work.done}
          action={actions.changeDone}
          field={field}
          workName={workName}
        />
        <Switch
          label="Planiram"
          value={work.planing}
          action={actions.changePlaning}
          field={field}
          workName={workName}
        />
      </Block>

      {children}

      <Block style={styles.paidContainer}>
        <Switch
          label="Plaćam uslužno"
          value={work.paid}
          action={actions.changePaid}
          field={field}
          workName={workName}
        />
        {work.paid ? (
          <Input
            price
            label="Cena uslužnog po hektaru"
            value={String(work.paidPrice)}
            action={actions.changePaidPrice}
            field={field}
            workName={workName}
          />
        ) : (
          <Input
            oilConsumption
            label="Potrošnja nafte po hektaru"
            value={String(work.consumption)}
            action={actions.changeOilConsumption}
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
