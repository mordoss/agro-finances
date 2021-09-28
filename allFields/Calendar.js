import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { RadioButtons, Block, Checkbox } from '../components';
import CalendarItem from './CalendarItem';
import useCalendarWorks from '../hooks/useCalendarWorks';
import { theme } from '../theme';

const { sizes, colors } = theme;

const isDoneFilterItems = [
  { value: 'planing', text: 'Planirano' },
  { value: 'done', text: 'Urađeno' },
  { value: 'all', text: 'Sve' }
];

const sortingValues = [
  { value: 'time', text: 'datumu' },
  { value: 'fields', text: 'njivama' }
];

const CalendarScreen = () => {
  const numberOfFields = useSelector(state => state.fields.length);
  const [currentTab, setCurrentTab] = useState('planing');
  const [sortingItem, setSortingItem] = useState('fields');
  const [isDate, setIsDate] = useState(false);

  const works = [...Array(numberOfFields).keys()]
    .map(field => useCalendarWorks(field, currentTab, isDate))
    .flat()
    .sort((a, b) => {
      if (sortingItem === 'time') {
        return new Date(a.date) - new Date(b.date);
      }
      return null;
    });

  return (
    <Block style={styles.container} flex={false}>
      <Checkbox
        value={isDate}
        setValue={setIsDate}
        label="Prikaži samo radove sa datumom"
      />
      <RadioButtons
        title="Prikaži"
        values={isDoneFilterItems}
        current={currentTab}
        setCurrent={setCurrentTab}
      />
      <RadioButtons
        title="Sortiraj po:"
        values={sortingValues}
        current={sortingItem}
        setCurrent={setSortingItem}
      />
      {works.map((work, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <CalendarItem work={work} i={i} key={i} />;
      })}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.base,
    backgroundColor: colors.backgorund
  }
});

export default CalendarScreen;
