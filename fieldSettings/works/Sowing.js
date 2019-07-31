import React from 'react';

import { Block, Picker, Slider, Input, Text } from '../../components';

const Sowing = props => {
  const { sowingData } = props;
  return (
    <Block>
      <Picker items={['AS', 'ZP', 'NS']} label="Izbor semena" active={sowingData.seed} />
      <Slider label="Gustina: " min={18} max={28} optimal={sowingData.seedConsumption} />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za: ____ ara.</Text>
    </Block>
  );
};

export default Sowing;
