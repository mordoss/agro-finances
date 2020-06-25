import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Button, Picker, InputWithIncrementer } from '../../components';
import ExtraCount from './ExtraCount';
import BagSizeSelection from './BagSizeSelection';
import {
  changeSeed,
  changeSeedConsumption,
  changeSeedConsumptionIncrementing,
} from '../../redux/actions/specialActions';
import { plantToIncrementerLabel } from '../../helperFunctions';
import { calcSowingBags } from '../../calcFunctions';

const Sowing = ({ sowingData, field, plant }) => {
  const { seed, seedConsumption } = sowingData;
  const { area } = useSelector(state => state[field]);
  const seeds = useSelector(state =>
    Object.entries(state.products.seed)
      .filter(el => el[1][1] === plant)
      .map(el => el[0])
  );
  const { bags, extraArea } = calcSowingBags(area, seedConsumption, plant);

  return (
    <Block>
      <Picker
        items={seeds}
        label="Izbor semena"
        action={changeSeed}
        active={seed}
        actionArgumentObject={{
          field,
        }}
      />
      <BagSizeSelection />
      <InputWithIncrementer
        label={plantToIncrementerLabel(plant)}
        action={changeSeedConsumption}
        actionIncrementing={changeSeedConsumptionIncrementing}
        actionArgumentObject={{
          field,
          value: String(seedConsumption),
        }}
      />
      {seed !== '' && <Button product={seed} group="seed" />}

      <ExtraCount count={bags} extraArea={extraArea} packaging="vreća" />
    </Block>
  );
};

export default Sowing;
