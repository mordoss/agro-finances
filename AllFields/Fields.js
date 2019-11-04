import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from '../components';
import FieldCard from './FieldCard';
import { theme } from '../theme';

const Fields = ({ handleChangeField, fields }) => {
  return (
    <Block flex={false} row wrap space="between" style={styles.fieldCardsContainer}>
      {fields.map(field => (
        <FieldCard field={field} handleChangeField={handleChangeField} key={field[2]} />
      ))}
    </Block>
  );
};

const styles = StyleSheet.create({
  fieldCardsContainer: {
    marginVertical: theme.sizes.base,
  },
});

export default Fields;
