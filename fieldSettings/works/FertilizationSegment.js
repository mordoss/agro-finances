import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Picker, InputWithIncrementer } from '../../components';
import ExtraCount from './ExtraCount';
import {
  changeSprayerOrFertilizer,
  changeFertilizerConsumption,
  changeFertilizerConsumptionIncrementing,
} from '../../redux/actions/specialActions';
import { calcFertilizationSegment } from '../../calcFunctions';
import { theme } from '../../theme';

const FertilizationSegment = ({
  fertilizationData,
  actionArgumentObject,
  place,
  midRow,
  field,
}) => {
  const area = useSelector(state => state[field].area);
  const { bags, extraArea } = calcFertilizationSegment(
    area,
    fertilizationData[`fertilizer${place}`],
    fertilizationData[`fertilizerConsumption${place}`]
  );
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
        label="Masa po aru "
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
      <ExtraCount count={bags} extraArea={extraArea} packaging="vreća" />
    </Block>
  );
};

export default FertilizationSegment;
