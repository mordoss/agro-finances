import React from 'react';
import { Picker, Block } from '../../components';
import { changeSprayerOrFertilizer } from '../../redux/actions/specialActions';
import { theme } from '../../theme';

const SprayingSegment = ({ sprayingData, actionArgumentObject, place }) => {
  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
      <Picker
        items={['Glifosav', 'Monsun', 'Nikosav']}
        label="Izbor herbicida"
        active={sprayingData[`sprayer${place}`]}
        action={changeSprayerOrFertilizer}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: 'sprayingState',
          propertyName: `sprayer${place}`,
        }}
      />
    </Block>
  );
};

export default SprayingSegment;
