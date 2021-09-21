import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const { colors, sizes } = theme;

const InputWithIncrementer = ({
  label,
  action,
  actionIncrementing,
  actionArgumentObject
}) => {
  const dispatch = useDispatch();

  return (
    <Block row style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          dispatch(actionIncrementing(actionArgumentObject, 'dec'))
        }
      >
        <View style={[styles.incrementer, styles.left]}>
          <Text gray> - </Text>
        </View>
      </TouchableOpacity>

      <TextInput
        value={actionArgumentObject.value}
        onChangeText={eventValue =>
          dispatch(action(actionArgumentObject, eventValue))
        }
        style={styles.input}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={() =>
          dispatch(actionIncrementing(actionArgumentObject, 'inc'))
        }
      >
        <View style={[styles.incrementer, styles.right]}>
          <Text gray>+</Text>
        </View>
      </TouchableOpacity>
      <Text gray style={{ marginLeft: sizes.base }}>
        {label}
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: sizes.base
  },
  input: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.gray,
    paddingHorizontal: sizes.base,
    height: sizes.base * 1.7,
    textAlign: 'center'
  },
  incrementer: {
    height: sizes.base * 1.7,
    width: sizes.base * 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: colors.backgorund
  },
  left: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  right: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});

export default InputWithIncrementer;
