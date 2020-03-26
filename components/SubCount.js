import React from 'react';
import Block from './Block';
import Text from './Text';

const SubCount = ({ value, label, unit }) => {
  return (
    <Block row>
      <Text gray>{label}</Text>
      <Text bold gray>
        {value}
      </Text>
      <Text gray> {unit}</Text>
    </Block>
  );
};

export default SubCount;
