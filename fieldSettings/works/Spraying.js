import React from 'react';
import { Block, Switch } from '../../components';
import SprayingSegment from './SprayingSegment';
import { changeMixed } from '../../redux/actions/specialActions';
import { spraying } from '../../assets/works';

const Spraying = ({ sprayingData, field, turn, plant }) => {
  const { mixed } = sprayingData;
  const { iupacs } = spraying[plant][turn];

  return (
    <>
      <SprayingSegment
        sprayingData={sprayingData}
        actionArgumentObject={{ field, turn }}
        place={1}
        field={field}
        plant={plant}
        iupacs={iupacs[0]}
      />
      {iupacs.length > 1 && (
        <>
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
              plant={plant}
              iupacs={iupacs[1]}
            />
          </Block>
        </>
      )}
    </>
  );
};

export default Spraying;
