import React from 'react';
import { Switch } from '../../components';
import FertilizationSegment from './FertilizationSegment';
import { changeWithFertilization } from '../../redux/actions/specialActions';

const MidRowCultivation = ({ midRowCultivationData, field, turn }) => {
  const { withFertilization } = midRowCultivationData;

  return (
    <>
      <Switch
        label="Sa prihranom"
        action={changeWithFertilization}
        actionArgumentObject={{ value: withFertilization, field, turn }}
      />

      {withFertilization && (
        <FertilizationSegment
          fertilizationData={midRowCultivationData}
          actionArgumentObject={{ field, turn }}
          place=""
          midRow
        />
      )}
    </>
  );
};

export default MidRowCultivation;
