import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import RadioButtons from '../components/RadioButtons';
import CalendarItem from './CalendarItem';
import useCalendarWorks from '../hooks/useCalendarWorks';
import { theme } from '../theme';

const radioValues = [
  { value: 'planing', text: 'Planirano' },
  { value: 'done', text: 'Urađeno' },
  { value: 'all', text: 'Sve' }
];

const CalendarScreen = () => {
  const [currentTab, setCurrentTab] = useState('planing');
  const numberOfFields = useSelector(state => state.fields.length);

  const fieldsArr = [...Array(numberOfFields).keys()].map(field =>
    useCalendarWorks(field, currentTab)
  );

  const filedsArrPlus = fieldsArr
    .filter(arr => arr.length)
    .map(work => ({
      ...work
    }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RadioButtons
        values={radioValues}
        current={currentTab}
        setCurrent={setCurrentTab}
      />
      {filedsArrPlus.map((field, i) => {
        const works = Object.values(field);
        return works.map((work, j) => {
          return <CalendarItem work={work} i={i} key={`${i}-${j}`} />;
        });
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.sizes.base,
    backgroundColor: theme.colors.backgorund
  }
});

export default CalendarScreen;
