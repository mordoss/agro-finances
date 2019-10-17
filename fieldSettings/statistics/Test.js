import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Test = props => {
  const { field } = props;
  const area = useSelector(state => state[field].area);
  const plant = useSelector(state => state[field].plant);
  const note = useSelector(state => state[field].note);

  return (
    <View>
      <Text>{`
      ${field}
      ${area}
      ${plant}
      ${note}
      `}</Text>
    </View>
  );
};

export default Test;
