import React from 'react';
import { Switch, Block } from '../../components';
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
        withAnimation
      />
      <Block style={{ height: withFertilization ? null : 0, overflow: 'hidden' }}>
        <FertilizationSegment
          field={field}
          fertilizationData={midRowCultivationData}
          actionArgumentObject={{ field, turn }}
          place=""
          midRow
        />
      </Block>
    </>
  );
};

export default MidRowCultivation;
