import React from 'react';
import Block from './Block';
import Text from './Text';

const SubCount = ({ value, label, unit }) => {
  return (
    <Block row center>
      <Text gray>{label}</Text>
      <Text bold>{value}</Text>
      <Text gray> {unit}</Text>
    </Block>
  );
};

export default SubCount;
