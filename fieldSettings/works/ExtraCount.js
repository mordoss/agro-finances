import React from 'react';
import { Block, Text } from '../../components';

const ExtraCount = ({ count, extraArea, packaging }) => {
  return (
    <Block style={{ marginTop: 16 }}>
      <Text gray>
        Broj {packaging}: {count}
      </Text>
      <Text gray>Ostaje Vam za: {extraArea} ara</Text>
    </Block>
  );
};

export default ExtraCount;
