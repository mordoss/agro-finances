import React from 'react';
import { Picker, InputWithIncrementer, Text } from '../../components';
import {
  changeSprayerOrFertilizer,
  changeFertilizerConsumption,
  changeFertilizerConsumptionIncrementing,
} from '../../redux/actions/specialActions';

const FertilizationSegment = ({ fertilizationData, field, turn, place }) => {
  return (
    <>
      <Picker
        items={['NPK', 'KAN', 'UREA']}
        label="Izbor đubriva"
        active={fertilizationData[`fertilizer${place}`]}
        propertyName={`fertilizer${place}`}
        workState="fertilizationState"
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
        actionIncrementing={changeFertilizerConsumptionIncrementing}
        field={field}
      />
      <Text gray>Potrebno Vam je: </Text>
      <Text gray>Ostaje Vam za ___ ara.</Text>
    </>
  );
};

export default FertilizationSegment;
