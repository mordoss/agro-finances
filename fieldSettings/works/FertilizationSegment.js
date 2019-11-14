import React from 'react';
import { Picker, InputWithIncrementer, Text, Block } from '../../components';
import * as actions from '../../redux/actions/specialActions';
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
        action={actions.changeSprayerOrFertilizer}
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
        action={actions.changeFertilizerConsumption}
        actionIncrementing={actions.changeFertilizerConsumptionIncrementing}
        field={field}
      />
      <Text gray>Potrebno Vam je:{fertilizationData[`fertilizer${place}Consumption`]} </Text>
      <Text gray>Ostaje Vam za ___ ara.</Text>
    </Block>
  );
};

export default FertilizationSegment;
