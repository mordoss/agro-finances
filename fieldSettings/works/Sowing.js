import React from 'react';
import { changeSeed, changeSeedConsumption } from '../../redux/actions/specialActions';
import { Block, Picker, InputWithincrementer, Input, Text } from '../../components';

const Sowing = props => {
  const { sowingData, field } = props;
  return (
    <Block>
      <Picker
        items={['AS', 'ZP', 'NS']}
        label="Izbor semena"
        active={sowingData.seed}
        action={changeSeed}
        field={field}
      />
      <InputWithincrementer
        label="Gustina: "
        min={18}
        max={28}
        value={sowingData.seedConsumption}
        field={field}
        action={changeSeedConsumption}
      />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za:{sowingData.seed} ara.</Text>
    </Block>
  );
};

export default Sowing;
