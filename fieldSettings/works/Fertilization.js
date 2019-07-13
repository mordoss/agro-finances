import React from 'react';

import { Block, Picker, Slider, Input, Text } from '../../components';

const Fertilization = () => {
  return (
    <Block>
      <Picker items={['NPK', 'KAN', 'UREA']} label="Izbor đubriva" />
      <Slider label="Masa po aru: " fertilization min={0.5} max={4} optimal={2} />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za ___ ara.</Text>
    </Block>
  );
};

export default Fertilization;
