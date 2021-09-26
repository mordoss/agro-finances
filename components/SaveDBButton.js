import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';

import Text from './Text';
import Block from './Block';
import { theme } from '../theme';
import useDB from '../hooks/useDB';

const { colors, sizes } = theme;

const SaveDBButton = ({ uid, fields }) => {
  const { writeFieldsDB } = useDB();

  return (
    <Block row center>
      <TouchableHighlight
        onPress={() => writeFieldsDB(uid, fields)}
        style={styles.button}
      >
        <Text white center>
          Sacuvaj u bazu
        </Text>
      </TouchableHighlight>
    </Block>
  );
};

export default SaveDBButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: sizes.base / 2,
    elevation: 3,
    backgroundColor: colors.primary,
    marginTop: sizes.base
  }
});
