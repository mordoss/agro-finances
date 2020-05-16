import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Picker, InputWithIncrementer } from '../../components';
import ExtraCount from './ExtraCount';
import {
  changeSeed,
  changeSeedConsumption,
  changeSeedConsumptionIncrementing,
} from '../../redux/actions/specialActions';
import { calcSowingBags } from '../../calcFunctions';

const Sowing = ({ sowingData, field }) => {
  const { seed, seedConsumption } = sowingData;
  const { area, plant } = useSelector(state => state[field]);
  const seeds = useSelector(state =>
    Object.entries(state.products.seed)
      // .filter(el => el[1][1] === plant)
      .map(el => el[0])
  );
  const { bags, extraArea } = calcSowingBags(area, seedConsumption);
  console.log(seeds);

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
      <InputWithIncrementer
        label="Gustina: "
        action={changeSeedConsumption}
        actionIncrementing={changeSeedConsumptionIncrementing}
        actionArgumentObject={{
          field,
          value: String(seedConsumption),
        }}
      />

      <ExtraCount count={bags} extraArea={extraArea} packaging="vreća" />
    </Block>
  );
};

export default Sowing;
