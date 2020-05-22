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
import { fertilization, midRowCultivation } from '../../assets/works';

const FertilizationSegment = ({
  fertilizationData,
  actionArgumentObject,
  place,
  midRow,
  field,
  plant,
}) => {
  const area = useSelector(state => state[field].area);
  const { turn } = actionArgumentObject;
  const { fertilizers } = place ? fertilization[plant][turn] : midRowCultivation[plant][turn];
  const { bags, extraArea } = calcFertilizationSegment(
    area,
    fertilizationData[`fertilizer${place}`],
    fertilizationData[`fertilizerConsumption${place}`]
  );

  const fertilizerNames = fertilizers.map(fertilizer => fertilizer[0]);

  return (
    <Block>
      <Picker
        items={fertilizerNames}
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
        label="Kg po aru"
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
