import React from 'react';
import { Block, Text } from '../../components';

const ExtraCount = ({ count, extraArea, packaging }) => {
  return (
    <Block style={{ marginTop: 16 }}>
      <Text gray>
        Potrebno Vam je: {count} {packaging}
      </Text>
      <Text gray>Ostaje Vam za: {extraArea} ara</Text>
    </Block>
  );
};

export default ExtraCount;
