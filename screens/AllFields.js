import React from 'react';
import { View, Button } from 'react-native';

const AllFields = props => {
  return (
    <View>
      <Button title="jedna njiva" onPress={() => props.navigation.navigate('FieldSettings')} />
    </View>
  );
};

export default AllFields;
