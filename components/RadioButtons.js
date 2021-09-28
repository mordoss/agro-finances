import React from 'react';
import { StyleSheet } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import Block from './Block';
import Text from './Text';

const RadioButtons = ({ values, current, setCurrent, title }) => {
  return (
    <Block>
      <Text>{title}</Text>
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
    </Block>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({});
