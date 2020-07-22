import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Block } from '../components';
import FieldCard from './FieldCard';
import { theme } from '../theme';

const { sizes } = theme;

const FieldsConnected = ({ navigation }) => {
  const fields = useSelector(state => [
    [state.field0.plant, state.field0.area, 0],
    [state.field1.plant, state.field1.area, 1],
    [state.field2.plant, state.field2.area, 2],
    [state.field3.plant, state.field3.area, 3],
  ]);
  const dispatch = useDispatch();
  const handleChangeField = key => {
    dispatch({ type: 'FIELD_CHANGED', field: key });
    navigation.navigate('FieldSettingsScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <Block row wrap space="between">
        {fields.map(field => (
          <FieldCard field={field} handleChangeField={handleChangeField} key={field[2]} />
        ))}
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.base,
    marginHorizontal: sizes.base * 2,
  },
});

export default FieldsConnected;
