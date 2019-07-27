import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Test = () => {
  const area = useSelector(state => state.area);
  const plant = useSelector(state => state.plant);

  return (
    <View>
      <Text>
        {area} _ {plant}
      </Text>
    </View>
  );
};

export default Test;
