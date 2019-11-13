import React from 'react';
import { Block, Switch } from '../../components';
import SprayingSegment from './SprayingSegment';
import { changeMixed } from '../../redux/actions/specialActions';

const Spraying = ({ sprayingData, field, turn }) => {
  return (
    <Block>
      <SprayingSegment sprayingData={sprayingData} turn={turn} place={1} field={field} />
      <Switch
        label="Mešam sa još jednim herbicidom"
        value={sprayingData.mixed}
        field={field}
        turn={turn}
        workName="sprayingState"
        action={changeMixed}
      />
      {sprayingData.mixed && (
        <SprayingSegment sprayingData={sprayingData} turn={turn} place={2} field={field} />
      )}
    </Block>
  );
};

export default Spraying;
