import React from 'react';
import { Picker, InputWithIncrementer, Block } from '../../components';
import {
  changeSprayerOrFertilizer,
  changeFertilizerConsumption,
  changeFertilizerConsumptionIncrementing,
} from '../../redux/actions/specialActions';
import { theme } from '../../theme';

const FertilizationSegment = ({ fertilizationData, field, turn, place }) => {
  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
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
        value={String(fertilizationData[`fertilizerConsumption${place}`])}
        propertyName={`fertilizerConsumption${place}`}
        turn={turn}
        action={changeFertilizerConsumption}
        actionIncrementing={changeFertilizerConsumptionIncrementing}
        field={field}
      />
    </Block>
  );
};

export default FertilizationSegment;
