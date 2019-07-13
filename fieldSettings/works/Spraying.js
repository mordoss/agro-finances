import React from 'react';
import { StyleSheet } from 'react-native';

import { Block, Picker, Input, Text } from '../../components';

const Spraying = () => {
  return (
    <Block>
      <Picker items={['Glifosav', 'Monsun', 'Nikosav']} label="Izbor herbicida" />
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za ___ ara.</Text>
    </Block>
  );
};

export default Spraying;
