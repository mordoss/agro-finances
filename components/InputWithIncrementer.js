import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Text from './Text';
import Block from './Block';
import { theme } from '../theme';

const InputWithIncrementer = ({
  label,
  fertilization,
  action,
  actionIncrementing,
  actionArgumentObject,
}) => {
  const dispatch = useDispatch();
  const unit = fertilization ? 'kg' : 'cm';

  return (
    <Block row style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(actionIncrementing(actionArgumentObject, 'dec'))}>
        <View style={[styles.incrementer, styles.left]}>
          <Text gray> - </Text>
        </View>
      </TouchableOpacity>

      <TextInput
        value={actionArgumentObject.value}
        onChangeText={eventValue => dispatch(action(actionArgumentObject, eventValue))}
        style={styles.input}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={() => dispatch(actionIncrementing(actionArgumentObject, 'inc'))}>
        <View style={[styles.incrementer, styles.right]}>
          <Text gray>+</Text>
        </View>
      </TouchableOpacity>
      <Text gray style={{ marginLeft: theme.sizes.base }}>
        {label}({unit})
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: theme.sizes.base,
  },
  input: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    paddingHorizontal: theme.sizes.base,
    height: theme.sizes.base * 1.7,
    textAlign: 'center',
  },
  incrementer: {
    height: theme.sizes.base * 1.7,
    width: theme.sizes.base * 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: theme.colors.backgorund,
  },
  left: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  right: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default InputWithIncrementer;
