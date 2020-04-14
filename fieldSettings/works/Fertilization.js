import React from 'react';
import { Switch, Block } from '../../components';
import FertilizationSegment from './FertilizationSegment';
import { changeMixed } from '../../redux/actions/specialActions';

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

      <Switch
        label="Mešam sa još jednim đubrivom"
        action={changeMixed}
        actionArgumentObject={{ field, turn, value: mixed, workState: 'fertilizationState' }}
        withAnimation
      />
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

export default Fertilization;
