import React from 'react';
import { Block, Switch } from '../../components';
import SprayingSegment from './SprayingSegment';
import { changeMixed } from '../../redux/actions/specialActions';

const Spraying = ({ sprayingData, field, turn }) => {
  const { mixed } = sprayingData;

  return (
    <>
      <SprayingSegment
        sprayingData={sprayingData}
        actionArgumentObject={{ field, turn }}
        place={1}
        field={field}
      />
      <Switch
        label="Mešam sa još jednim herbicidom"
        action={changeMixed}
        actionArgumentObject={{ field, turn, value: mixed, workState: 'sprayingState' }}
        withAnimation
      />
      <Block style={{ height: mixed ? null : 0, overflow: 'hidden' }}>
        <SprayingSegment
          sprayingData={sprayingData}
          actionArgumentObject={{ field, turn }}
          place={2}
          field={field}
        />
      </Block>
    </>
  );
};

export default Spraying;
