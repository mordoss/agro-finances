import React from 'react';
import { Picker, Block } from '../../components';
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
    </Block>
  );
};

export default SprayingSegment;
