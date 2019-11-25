import React from 'react';
import { StyleSheet, Picker } from 'react-native';
import { Block } from '../../components';
import DayPicker from './DayPicker';
import { theme } from '../../theme';

const months = [
  ['januar', 31],
  ['februar', 28],
  ['mart', 31],
  ['april', 30],
  ['maj', 31],
  ['jun', 30],
  ['jul', 31],
  ['avgust', 31],
  ['septembar', 30],
  ['oktobar', 31],
  ['novembar', 30],
  ['decembar', 31],
];

const DatePicker = () => {
  const curentMonthIndex = new Date().getMonth();
  return (
    <Block style={styles.container} row space="between" center>
      <Block style={styles.pickerContainer}>
        <Picker selectedValue={months[curentMonthIndex][0]}>
          {months.map(month => (
            <Picker.Item label={month[0]} value={month[0]} key={month[0]} />
          ))}
        </Picker>
      </Block>
      <DayPicker numberOfDaysInMonth={months[curentMonthIndex][1]} />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  pickerContainer: {
    flex: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.gray,
    borderRadius: theme.sizes.radius,
  },
});

export default DatePicker;
