import React from 'react';
import { Block, Switch } from '../../components';
import SprayingSegment from './SprayingSegment';
import { changeSprayerActive } from '../../redux/actions/specialActions';
import { spraying } from '../../assets/works';

const Spraying = ({ sprayingData, field, turn, plant }) => {
  const { sprayer1Active, sprayer2Active, sprayer3Active } = sprayingData;
  const { sprayers } = spraying[plant][turn];
  const activeSprayersArray = [sprayer1Active, sprayer2Active, sprayer3Active];

  return (
    <>
      {sprayers.map((sprayer, index) => (
        <Block key={sprayer.iupac}>
          <Switch
            withAnimation
            label={sprayer.iupac}
            action={changeSprayerActive}
            actionArgumentObject={{
              field,
              turn,
              value: activeSprayersArray[index],
              place: index + 1,
            }}
          />
          <Block style={{ height: activeSprayersArray[index] ? null : 0, overflow: 'hidden' }}>
            <SprayingSegment
              sprayingData={sprayingData}
              actionArgumentObject={{ field, turn }}
              place={index + 1}
              field={field}
              plant={plant}
              sprayer={sprayers[index]}
            />
          </Block>
        </Block>
      ))}
    </>
  );
};

export default Spraying;
