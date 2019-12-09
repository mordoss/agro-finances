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
    </Block>
  );
};

export default Sowing;
