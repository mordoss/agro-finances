import React from 'react';
import { Picker, InputWithIncrementer, Block } from '../../components';
import {
  changeSprayerOrFertilizer,
  changeFertilizerConsumption,
  changeFertilizerConsumptionIncrementing,
} from '../../redux/actions/specialActions';
import { theme } from '../../theme';

const FertilizationSegment = ({ fertilizationData, actionArgumentObject, place, midRow }) => {
  return (
    <Block style={{ marginVertical: theme.sizes.base }}>
      <Picker
        items={['NPK', 'KAN', 'UREA']}
        label="Izbor đubriva"
        active={fertilizationData[`fertilizer${place}`]}
        action={changeSprayerOrFertilizer}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: midRow ? 'midRowCultivationState' : 'fertilizationState',
          propertyName: `fertilizer${place}`,
        }}
      />
      <InputWithIncrementer
        label="Masa po aru: "
        fertilization
        action={changeFertilizerConsumption}
        actionIncrementing={changeFertilizerConsumptionIncrementing}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: midRow ? 'midRowCultivationState' : 'fertilizationState',
          propertyName: `fertilizerConsumption${place}`,
          value: String(fertilizationData[`fertilizerConsumption${place}`]),
        }}
      />
    </Block>
  );
};

export default FertilizationSegment;
