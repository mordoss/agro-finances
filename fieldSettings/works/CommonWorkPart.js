import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Block } from '../../components';
import PaidAndConsumptionSegment from './PaidAndConsumptionSegment';
import DoneAndPlaningSegment from './DoneAndPlaningSegment';
import DatePicker from './DatePicker';
import SubTotal from './SubTotal';
import { theme } from '../../theme';

const CommonWorkPart = ({ field, name, work, workName, children }) => {
  const { done, planing, paid, paidPrice, oilConsumption } = work;

  return (
    <Block flex={false}>
      <Text center semibold title gray style={styles.workName}>
        {name}
      </Text>

      <Block row>
        <DoneAndPlaningSegment
          done={done}
          planing={planing}
          actionArgumentObject={{ field, workName }}
        />
        {planing && <DatePicker field={field} workName={workName} date={work.date} />}
      </Block>

      <PaidAndConsumptionSegment
        paid={paid}
        actionArgumentObject={{ field, workName }}
        paidPrice={paidPrice}
        oilConsumption={oilConsumption}
      />

      {children}

      <SubTotal field={field} work={work} workName={workName} />
    </Block>
  );
};

const styles = StyleSheet.create({
  workName: {
    marginBottom: theme.sizes.base,
  },
});

export default CommonWorkPart;
