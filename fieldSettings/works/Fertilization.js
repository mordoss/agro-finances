import React from 'react';
import { Switch } from '../../components';
import FertilizationSegment from './FertilizationSegment';
import { changeMixed } from '../../redux/actions/specialActions';

const Fertilization = ({ fertilizationData, field, turn }) => {
  return (
    <>
      <FertilizationSegment
        fertilizationData={fertilizationData}
        field={field}
        turn={turn}
        place={1}
      />

      <Switch
        label="Mešam sa još jednim herbicidom"
        value={fertilizationData.mixed}
        field={field}
        turn={turn}
        workName="fertilizationState"
        action={changeMixed}
      />
      {fertilizationData.mixed && (
        <FertilizationSegment
          fertilizationData={fertilizationData}
          field={field}
          turn={turn}
          place={2}
        />
      )}
    </>
  );
};

export default Fertilization;
