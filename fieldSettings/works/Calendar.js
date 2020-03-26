import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Block, Text } from '../../components';
import { changeDate } from '../../redux/actions/cammonWorkActions';
import { dateToString } from '../../helperFunctions';
import { theme } from '../../theme';

const Calendar = ({ isActive, actionArgumentObject }) => {
  const { field, workName } = actionArgumentObject;
  const date = useSelector(state => state[field].groundWorksState[workName].date);
  const [show, setShow] = useState(false);
  const today = new Date();
  const dispatch = useDispatch();

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    dispatch(changeDate(actionArgumentObject, selectedDate));
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Block>
      {isActive && (
        <TouchableOpacity onPress={showDatepicker} style={styles.button}>
          <Text center gray>
            {dateToString(date) ? dateToString(date) : 'Izaberite datum'}
          </Text>
        </TouchableOpacity>
      )}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date ? new Date(date) : today}
          mode="date"
          display="default"
          onChange={onChange}
          minimumDate={today}
        />
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    width: theme.sizes.base * 6,
    borderRadius: 5,
    padding: theme.sizes.base / 4,
    elevation: 3,
    backgroundColor: theme.colors.backgorund,
  },
});

export default Calendar;
