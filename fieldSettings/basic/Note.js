import React, { useState } from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeNote } from '../../redux/actions/basicStateActions';
import { Text } from '../../components';
import { theme } from '../../theme';

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
            borderColor: onFocus ? theme.colors.primary : theme.colors.gray,
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
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    backgroundColor: theme.colors.white,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    marginTop: theme.sizes.base / 2,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2,
    height: theme.sizes.base * 4,
    width: Dimensions.get('window').width - theme.sizes.base * 6,
  },
});
