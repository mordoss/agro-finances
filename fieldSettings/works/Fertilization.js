import React from 'react';
import {
  changeSprayerOrFertilizer,
  changeMixed,
  changeFertilizerConsumption,
} from '../../redux/actions/specialActions';
import { Block, Picker, Slider, Input, Text, Switch } from '../../components';

const Fertilization = props => {
  const { fertilizationData, field, turn } = props;

  return (
    <Block>
      <Picker
        items={['NPK', 'KAN', 'UREA']}
        label="Izbor đubriva"
        active={fertilizationData.fertilizer1}
        propertyName="fertilizer1"
        work="fertilizationState"
        turn={turn}
        action={changeSprayerOrFertilizer}
        field={field}
      />
      <Slider
        label="Masa po aru: "
        fertilization
        min={0.5}
        max={4}
        value={fertilizationData.fertilizer1Consumption}
        propertyName="fertilizer1Consumption"
        turn={turn}
        action={changeFertilizerConsumption}
        field={field}
      />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za ___ ara.</Text>
      <Switch
        label="Mešam sa još jednim herbicidom"
        value={fertilizationData.mixed}
        field={field}
        turn={turn}
        propertyName="fertilizationState"
        action={changeMixed}
      />
      {fertilizationData.mixed && (
        <>
          <Picker
            items={['NPK', 'KAN', 'UREA']}
            label="Izbor đubriva"
            active={fertilizationData.fertilizer2}
            propertyName="fertilizer2"
            work="fertilizationState"
            turn={turn}
            action={changeSprayerOrFertilizer}
            field={field}
          />
          <Slider
            label="Masa po aru: "
            fertilization
            min={0.5}
            max={4}
            value={fertilizationData.fertilizer1Consumption}
            propertyName="fertilizer1Consumption"
            turn={turn}
            action={changeFertilizerConsumption}
            field={field}
          />
          <Input bags label="Potrebno Vam je: " />
          <Text gray>Ostaje Vam za ___ ara.</Text>
        </>
      )}
    </Block>
  );
};

export default Fertilization;
