import React from 'react';
import { StyleSheet } from 'react-native';

import { Block, Picker, Slider, Input, Text } from '../../components';

const Sowing = () => {
  return (
    <Block>
      <Picker items={['AS', 'ZP', 'NS']} label="Izbor semena" />
      <Slider label="Gustina: " min={18} max={28} optimal={22} />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za: ___ ara.</Text>
    </Block>
  );
};

export default Sowing;
