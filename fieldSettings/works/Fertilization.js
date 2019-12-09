import React from 'react';
import { Switch } from '../../components';
import FertilizationSegment from './FertilizationSegment';
import { changeMixed } from '../../redux/actions/specialActions';

const Fertilization = ({ fertilizationData, field, turn }) => {
  const { mixed } = fertilizationData;

  return (
    <>
      <FertilizationSegment
        fertilizationData={fertilizationData}
        actionArgumentObject={{ field, turn }}
        place={1}
      />

      <Switch
        label="Mešam sa još jednim hranivom"
        action={changeMixed}
        actionArgumentObject={{ field, turn, value: mixed, workState: 'fertilizationState' }}
      />
      {mixed && (
        <FertilizationSegment
          fertilizationData={fertilizationData}
          actionArgumentObject={{ field, turn }}
          place={2}
        />
      )}
    </>
  );
};

export default Fertilization;
