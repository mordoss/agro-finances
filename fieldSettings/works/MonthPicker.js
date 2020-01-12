import React from 'react';
import { Picker, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Block } from '../../components';
import { changeDateMonth } from '../../redux/actions/cammonWorkActions';
import { theme } from '../../theme';

const MonthPicker = ({ actionArgumentObject, allMonths, month }) => {
  const dispatch = useDispatch();

  return (
    <Block style={styles.container}>
      <Picker
        mode="dropdown"
        style={styles.picker}
        selectedValue={month}
        onValueChange={itemValue => dispatch(changeDateMonth(actionArgumentObject, itemValue))}
      >
        {allMonths.map(m => (
          <Picker.Item label={m} value={m} key={m} />
        ))}
      </Picker>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    elevation: 3,
    backgroundColor: theme.colors.backgorund,
    borderRadius: theme.sizes.radius,
  },
  picker: {
    height: theme.sizes.base * 2,
  },
});

export default MonthPicker;
