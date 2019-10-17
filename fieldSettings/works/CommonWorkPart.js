import React from 'react';
import { StyleSheet } from 'react-native';
import {
  changeDone,
  changePlaning,
  changePaid,
  changeOilConsumption,
  changePaidPrice,
} from '../../redux/actions/cammonWorkActions';
import { Text, Switch, Block, Input, SubTotal } from '../../components';
import { theme } from '../../theme';

const CommonWorkPart = props => {
  const { field, name, work, propertyName, children } = props;
  return (
    <Block flex={false}>
      <Text center bold h1 gray style={styles.workName}>
        {name}
      </Text>

      <Block>
        <Switch
          label="Urađeno"
          value={work.done}
          action={changeDone}
          field={field}
          propertyName={propertyName}
        />
        <Switch
          label="Planiram"
          value={work.planing}
          action={changePlaning}
          field={field}
          propertyName={propertyName}
        />
      </Block>

      {children}

      <Block style={styles.paidContainer}>
        <Switch
          label="Plaćam uslužno"
          value={work.paid}
          action={changePaid}
          field={field}
          propertyName={propertyName}
        />
        {work.paid && (
          <Input
            price
            label="Cena uslužnog po hektaru"
            value={String(work.paidPrice)}
            action={changePaidPrice}
            field={field}
            propertyName={propertyName}
          />
        )}
        {!work.paid && (
          <Input
            oilConsumption
            label="Potrošnja nafte po hektaru"
            value={String(work.consumption)}
            action={changeOilConsumption}
            field={field}
            propertyName={propertyName}
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
    marginTop: theme.sizes.base,
  },
});

export default CommonWorkPart;
