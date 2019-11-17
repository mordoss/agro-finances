import React from 'react';
import Block from './Block';
import Text from './Text';

const SubCount = ({ value, label, unit }) => {
  return (
    <Block row center>
      <Text>{label}</Text>
      <Text semibold>{value}</Text>
      <Text> {unit}</Text>
    </Block>
  );
};

export default SubCount;
