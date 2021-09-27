import React from 'react';
import { StyleSheet } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import { Text } from '.';

const RadioButtons = ({ values, current, setCurrent }) => {
  return (
    <RadioButtonGroup
      containerStyle={{
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}
      selected={current}
      onSelected={value => setCurrent(value)}
      radioBackground="green"
    >
      {values.map((value, i) => (
        <RadioButtonItem
          key={i}
          value={value.value}
          label={<Text black>{value.text}</Text>}
        />
      ))}
    </RadioButtonGroup>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({});
