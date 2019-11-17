import React from 'react';
import { Picker, SubCount, Block } from '../../components';
import { changeSprayerOrFertilizer } from '../../redux/actions/specialActions';
import { theme } from '../../theme';

const SprayingSegment = ({ sprayingData, turn, place, field }) => {
  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
      <Picker
        items={['Glifosav', 'Monsun', 'Nikosav']}
        label="Izbor herbicida"
        active={sprayingData[`sprayer${place}`]}
        propertyName={`sprayer${place}`}
        workState="sprayingState"
        turn={turn}
        action={changeSprayerOrFertilizer}
        field={field}
      />
      <SubCount label="Potrebno Vam je: " value={5} unit="flaša herbicida." />
    </Block>
  );
};

export default SprayingSegment;
