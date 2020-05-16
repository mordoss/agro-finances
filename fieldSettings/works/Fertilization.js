import React from 'react';
import { StyleSheet } from 'react-native';

import { Switch, Block } from '../../components';
import FertilizationSegment from './FertilizationSegment';
import { changeMixed } from '../../redux/actions/specialActions';
import { theme } from '../../theme';

const Fertilization = ({ fertilizationData, field, turn, plant }) => {
  const { mixed } = fertilizationData;

  return (
    <>
      <FertilizationSegment
        field={field}
        fertilizationData={fertilizationData}
        actionArgumentObject={{ field, turn }}
        place={1}
        plant={plant}
      />
      <Block style={styles.switch}>
        <Switch
          label="Mešam sa još jednim đubrivom"
          action={changeMixed}
          actionArgumentObject={{ field, turn, value: mixed, workState: 'fertilizationState' }}
          withAnimation
        />
      </Block>
      <Block style={{ height: mixed ? null : 0, overflow: 'hidden' }}>
        <FertilizationSegment
          field={field}
          fertilizationData={fertilizationData}
          actionArgumentObject={{ field, turn }}
          place={2}
          plant={plant}
        />
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  switch: {
    marginVertical: theme.sizes.base,
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: theme.sizes.base,
  },
});

export default Fertilization;
