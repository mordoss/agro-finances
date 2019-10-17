import React from 'react';
import { StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const CustomSlider = props => {
  const dispatch = useDispatch();
  const { label, fertilization, min, max, value, action, turn, propertyName, field } = props;
  const unit = fertilization ? 'kg' : 'cm';
  return (
    <Block style={styles.slider}>
      <Block row>
        <Text gray>{label}</Text>
        <Text gray bold>
          {value}
          {unit}
        </Text>
      </Block>
      <Slider
        minimumValue={min}
        maximumValue={max}
        step={1}
        value={value}
        onValueChange={e => dispatch(action(field, e, turn, propertyName))}
        minimumTrackTintColor={theme.colors.secondary}
        maximumTrackTintColor={theme.colors.primary}
        thumbTintColor={theme.colors.tertiary}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  slider: {
    marginTop: theme.sizes.base,
  },
});

export default CustomSlider;
