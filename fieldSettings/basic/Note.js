import React, { useState } from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeNote } from '../../redux/actions/basicStateActions';
import { Text } from '../../components';
import { theme } from '../../theme';

const { colors, sizes } = theme;

const Input = ({ field }) => {
  const note = useSelector(state => state[field].note);
  const [onFocus, setOnFocus] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Text gray>Napomena: </Text>
      <TextInput
        value={note}
        onChangeText={e => dispatch(changeNote(field, e))}
        onFocus={() => setOnFocus(true)}
        onEndEditing={() => setOnFocus(false)}
        style={[
          styles.input,
          {
            borderColor: onFocus ? colors.primary : colors.gray,
            borderWidth: onFocus ? 2 : StyleSheet.hairlineWidth,
          },
        ]}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        multiline
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black,
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    fontSize: sizes.font,
    fontWeight: '500',
    color: colors.black,
    marginTop: sizes.base / 2,
    paddingHorizontal: sizes.base,
    paddingVertical: sizes.base / 2,
    height: sizes.base * 4,
    width: Dimensions.get('window').width - sizes.base * 6,
  },
});
