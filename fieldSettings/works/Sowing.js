import React from 'react';
import { Block, Picker, InputWithIncrementer } from '../../components';
import {
  changeSeed,
  changeSeedConsumption,
  changeSeedConsumptionIncrementing,
} from '../../redux/actions/specialActions';

const Sowing = ({ sowingData, field }) => {
  const { seed, seedConsumption } = sowingData;

  return (
    <Block>
      <Picker
        items={['AS', 'ZP', 'NS']}
        label="Izbor semena"
        active={seed}
        action={changeSeed}
        field={field}
      />
      <InputWithIncrementer
        label="Gustina: "
        min={18}
        max={28}
        value={String(seedConsumption)}
        field={field}
        action={changeSeedConsumption}
        actionIncrementing={changeSeedConsumptionIncrementing}
      />
    </Block>
  );
};

export default Sowing;
