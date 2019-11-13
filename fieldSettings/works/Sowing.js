import React from 'react';
import { Block, Picker, InputWithIncrementer, Text } from '../../components';
import {
  changeSeed,
  changeSeedConsumption,
  changeSeedConsumptionIncrementing,
} from '../../redux/actions/specialActions';

const Sowing = ({ sowingData, field }) => {
  return (
    <Block>
      <Picker
        items={['AS', 'ZP', 'NS']}
        label="Izbor semena"
        active={sowingData.seed}
        action={changeSeed}
        field={field}
      />
      <InputWithIncrementer
        label="Gustina: "
        min={18}
        max={28}
        value={String(sowingData.seedConsumption)}
        field={field}
        action={changeSeedConsumption}
        actionIncrementing={changeSeedConsumptionIncrementing}
      />
      <Text gray>Potrebno Vam je: </Text>
      <Text gray>Ostaje Vam za:{sowingData.seed} ara.</Text>
    </Block>
  );
};

export default Sowing;
