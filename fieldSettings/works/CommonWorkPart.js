import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Block, SubTotal } from '../../components';
import PaidAndConsumptionSegment from './PaidAndConsumptionSegment';
import DoneAndPlaningSegment from './DoneAndPlaningSegment';
import DatePicker from './DatePicker';
import { theme } from '../../theme';

const CommonWorkPart = ({ field, name, work, workName, children }) => {
  const { done, planing, paid, paidPrice, oilConsumption } = work;

  return (
    <Block flex={false}>
      <Text center semibold title gray style={styles.workName}>
        {name}
      </Text>

      <Block row>
        <DoneAndPlaningSegment done={done} planing={planing} field={field} workName={workName} />
        {planing && <DatePicker />}
      </Block>

      {children}

      <PaidAndConsumptionSegment
        paid={paid}
        field={field}
        workName={workName}
        paidPrice={paidPrice}
        oilConsumption={oilConsumption}
      />

      <SubTotal />
    </Block>
  );
};

const styles = StyleSheet.create({
  workName: {
    marginBottom: theme.sizes.base,
  },
});

export default CommonWorkPart;
