import React from 'react';
import { Block, Switch } from '../../components';
import SprayingSegment from './SprayingSegment';
import { changeMixed } from '../../redux/actions/specialActions';

const Spraying = ({ sprayingData, field, turn }) => {
  const { mixed } = sprayingData;

  return (
    <Block>
      <SprayingSegment
        sprayingData={sprayingData}
        actionArgumentObject={{ field, turn }}
        place={1}
      />
      <Switch
        label="Mešam sa još jednim herbicidom"
        action={changeMixed}
        actionArgumentObject={{ field, turn, value: mixed, workState: 'sprayingState' }}
      />
      {sprayingData.mixed && (
        <SprayingSegment
          sprayingData={sprayingData}
          actionArgumentObject={{ field, turn }}
          place={2}
        />
      )}
    </Block>
  );
};

export default Spraying;
