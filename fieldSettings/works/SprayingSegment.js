import React from 'react';
import { Picker, Text } from '../../components';
import { changeSprayerOrFertilizer } from '../../redux/actions/specialActions';

const SprayingSegment = ({ sprayingData, turn, place, field }) => {
  return (
    <>
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
      <Text gray>Potrebno Vam je: </Text>
      <Text gray>Ostaje Vam za ___ ara.</Text>
    </>
  );
};

export default SprayingSegment;
