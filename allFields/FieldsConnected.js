import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Block, Text } from '../components';
import FieldCard from './FieldCard';
import { theme } from '../theme';

const { sizes } = theme;

//  [state.fields[0].plant, state.fields[0].area, 0],

const FieldsConnected = ({ navigation }) => {
  const fields = useSelector(state => state.fields);

  const dispatch = useDispatch();

  const handleChangeField = key => {
    dispatch({ type: 'FIELD_CHANGED', field: key });
    navigation.navigate('FieldSettingsScreen');
  };
  const handleAddField = () => {
    dispatch({ type: 'ADD_FIELD' });
  };

  return (
    <ScrollView style={styles.container}>
      <Block row wrap space="between">
        {fields.map((field, i) => (
          <FieldCard
            field={[field.plant, field.area, i]}
            handleChangeField={handleChangeField}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
          />
        ))}
        <FieldCard
          handleChangeField={handleAddField}
          field={[null, null, null]}
        />
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.base,
    marginHorizontal: sizes.base * 2
  }
});

export default FieldsConnected;
