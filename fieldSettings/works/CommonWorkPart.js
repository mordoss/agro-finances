import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from '../../components';
import PaidAndConsumptionSegment from './PaidAndConsumptionSegment';
import DoneAndPlaningSegment from './DoneAndPlaningSegment';
import Calendar from './Calendar';
import SubTotal from './SubTotal';
import Title from './Title';
import { theme } from '../../theme';

const CommonWorkPart = ({ field, name, work, children }) => {
  const { done, planing, paid, paidPrice, oilConsumption, workName } = work;
  const actionArgumentObject = { field, workName };

  return (
    <Block flex={false}>
      <Title name={name} />
      <Block style={styles.content}>
        <Block row center>
          <DoneAndPlaningSegment
            done={done}
            planing={planing}
            actionArgumentObject={actionArgumentObject}
          />
          <Calendar
            isActive={planing || done}
            actionArgumentObject={actionArgumentObject}
          />
        </Block>

        <Block
          style={{ height: done || planing ? null : 0, overflow: 'hidden' }}
        >
          <PaidAndConsumptionSegment
            paid={paid}
            actionArgumentObject={actionArgumentObject}
            paidPrice={paidPrice}
            oilConsumption={oilConsumption}
          />
          {children}
          <SubTotal field={field} work={work} />
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: theme.sizes.base
  }
});

export default CommonWorkPart;
