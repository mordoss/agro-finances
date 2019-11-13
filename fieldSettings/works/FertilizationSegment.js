import React from 'react';
import { Picker, InputWithIncrementer, Input, Text } from '../../components';
import {
  changeSprayerOrFertilizer,
  changeFertilizerConsumption,
} from '../../redux/actions/specialActions';

const FertilizationSegment = ({ fertilizationData, field, turn, place }) => {
  return (
    <>
      <Picker
        items={['NPK', 'KAN', 'UREA']}
        label="Izbor đubriva"
        active={fertilizationData[`fertilizer${place}`]}
        propertyName={`fertilizer${place}`}
        work="fertilizationState"
        turn={turn}
        action={changeSprayerOrFertilizer}
        field={field}
      />
      <InputWithIncrementer
        label="Masa po aru: "
        fertilization
        min={0.5}
        max={4}
        value={String(fertilizationData[`fertilizer${place}Consumption`])}
        propertyName={`fertilizer${place}Consumption`}
        turn={turn}
        action={changeFertilizerConsumption}
        field={field}
      />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za ___ ara.</Text>
    </>
  );
};

export default FertilizationSegment;
