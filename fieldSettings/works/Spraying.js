import React from 'react';

import { Block, Picker, Input, Text, Switch } from '../../components';

const Spraying = props => {
  const { sprayingData } = props;
  return (
    <Block>
      <Picker
        items={['Glifosav', 'Monsun', 'Nikosav']}
        label="Izbor herbicida"
        active={sprayingData.sprayer1}
      />
      <Switch label="Mešam sa još jednim herbicidom" value={sprayingData.mixed} />
      {sprayingData.mixed && (
        <Picker
          items={['Glifosav', 'Monsun', 'Nikosav']}
          label="Izbor herbicida"
          active={sprayingData.sprayer2}
        />
      )}
      <Input bags label="Potrebno Vam je: " />
      <Text gray>Ostaje Vam za ___ ara.</Text>
    </Block>
  );
};

export default Spraying;
