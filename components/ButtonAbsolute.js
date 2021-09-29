import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';

const ButtonAbsolute = ({ field }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button
        title="izbrisi"
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
    right: 0
  }
});
