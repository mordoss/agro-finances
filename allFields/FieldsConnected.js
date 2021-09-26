import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Block } from '../components';
import FieldCard from './FieldCard';
import { theme } from '../theme';
import SaveDBButton from '../components/SaveDBButton';

const { sizes } = theme;

const FieldsConnected = ({ navigation }) => {
  const { fields } = useSelector(state => state);
  const { uid } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleChangeField = key => {
    dispatch({ type: 'FIELD_CHANGED', field: key });
    navigation.navigate('FieldSettingsScreen');
  };
  const handleAddField = () => {
    dispatch({ type: 'ADD_FIELD' });
  };

  return (
    <Block style={styles.container}>
      <Block row wrap>
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
      <SaveDBButton uid={uid} fields={fields} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.base,
    marginHorizontal: sizes.base
  }
});

export default FieldsConnected;
