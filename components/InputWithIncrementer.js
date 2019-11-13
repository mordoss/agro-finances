import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const InputWithIncrementer = ({
  label,
  fertilization,
  min,
  max,
  value,
  action,
  actionIncrementing,
  turn,
  propertyName,
  field,
}) => {
  const dispatch = useDispatch();
  const unit = fertilization ? 'kg' : 'cm';

  return (
    <Block row style={styles.container}>
      <Text gray>{label}</Text>

      <TouchableOpacity
        onPress={() => dispatch(actionIncrementing(field, value, 'dec', turn, propertyName))}
      >
        <View style={[styles.incrementer, styles.left]}>
          <Text gray> - </Text>
        </View>
      </TouchableOpacity>

      <TextInput
        value={value}
        onChangeText={eventValue => dispatch(action(field, eventValue, turn, propertyName))}
        style={styles.input}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={() => dispatch(actionIncrementing(field, value, 'inc', turn, propertyName))}
      >
        <View style={[styles.incrementer, styles.right]}>
          <Text gray>+</Text>
        </View>
      </TouchableOpacity>

      <Text gray>{unit}</Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base,
    alignItems: 'center',
  },
  input: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    paddingHorizontal: theme.sizes.base,
    height: theme.sizes.base * 1.5,
    textAlign: 'center',
  },
  incrementer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    height: theme.sizes.base * 1.5,
    width: theme.sizes.base * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    borderTopLeftRadius: theme.sizes.radius,
    borderBottomLeftRadius: theme.sizes.radius,
    marginLeft: theme.sizes.base / 2,
  },
  right: {
    borderTopRightRadius: theme.sizes.radius,
    borderBottomRightRadius: theme.sizes.radius,
    marginRight: theme.sizes.base / 2,
  },
});

export default InputWithIncrementer;
