import React from 'react';
import { Block, Picker, InputWithIncrementer, Input, Text } from '../../components';
import { changeSeed, changeSeedConsumption } from '../../redux/actions/specialActions';

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
      />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za:{sowingData.seed} ara.</Text>
    </Block>
  );
};

export default Sowing;
