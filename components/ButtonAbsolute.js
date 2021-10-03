import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { theme } from '../theme';

const { colors, sizes } = theme;

const ButtonAbsolute = ({ field }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button
        title="izbriši"
        color={colors.accent}
        onPress={() =>
          dispatch({
            type: 'REMOVE_FIELD',
            field
          })
        }
      />
    </View>
  );
};

export default ButtonAbsolute;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: -2,
    top: -2,
    overflow: 'hidden',
    borderColor: colors.white,
    borderWidth: 3,
    borderRadius: sizes.radius,
    zIndex: 2
  }
});
