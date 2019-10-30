import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Block, Text } from '../components';
import { theme } from '../theme';

const AllFields = props => {
  const fields = useSelector(state => [
    [state.field0.plant, state.field0.area, 0],
    [state.field1.plant, state.field1.area, 1],
    [state.field2.plant, state.field2.area, 2],
    [state.field3.plant, state.field3.area, 3],
  ]);

  const activeField = useSelector(state => state.activeField);

  const dispatch = useDispatch();

  const handleChangeField = key => {
    dispatch({ type: 'FIELD_CHANGED', field: key });
    props.navigation.navigate('FieldSettings');
  };
  return (
    <Block row wrap space="around" style={styles.fieldsContainer}>
      {fields.map(field => (
        <TouchableOpacity key={field[2]} onPress={() => handleChangeField(field[2])}>
          <Block card color={theme.colors.gray2} style={styles.fieldCard} shadow>
            <Text>{field[0]}</Text>
          </Block>
        </TouchableOpacity>
      ))}
    </Block>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  fieldsContainer: {
    paddingHorizontal: theme.sizes.base * 2,
    marginVertical: theme.sizes.base,
  },
  fieldCard: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 5 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 5 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 4 - theme.sizes.base) / 2,
    alignItems: 'center',
  },
});

export default AllFields;
