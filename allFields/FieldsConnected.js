import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Block } from '../components';
import FieldCard from './FieldCard';
import { theme } from '../theme';
import DBButton from '../components/DBButton';
import {
  loadFieldsDBThunk,
  saveFieldsDBThunk
} from '../redux/actions/firebaseActions';

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
      <Block row>
        <DBButton
          uid={uid}
          thunk={saveFieldsDBThunk}
          dispatch={dispatch}
          title="Zapamti u bazu"
          primary
        />
        <DBButton
          uid={uid}
          thunk={loadFieldsDBThunk}
          dispatch={dispatch}
          title="Povuci iz baze"
        />
      </Block>
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
