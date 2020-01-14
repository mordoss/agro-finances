import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Block, Text, Badge } from '../components';
import usePlanedWorks from '../hooks/usePlanedWorks';
import { workNameToNative, plantStringToImage } from '../helperFunctions';

import { theme } from '../theme';

const CalendarScreen = () => {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const todayIndex = Math.floor((Date.now() - Date.parse(today.getFullYear(), 0, 0)) / 86400000);

  const works0 = usePlanedWorks(0);
  const works1 = usePlanedWorks(1);
  const works2 = usePlanedWorks(2);
  const works3 = usePlanedWorks(3);

  const allWorks = [
    ...works0,
    ...works1,
    ...works2,
    ...works3,
    [{ date: [months[todayMonth], todayDay], workName: null }, 'Today'],
  ].sort((a, b) => {
    const indexA = months.indexOf(a[0].date[0]);
    const indexB = months.indexOf(b[0].date[0]);
    return indexA === indexB ? a[0].date[1] - b[0].date[1] : indexA - indexB;
  });

  return (
    <ScrollView style={styles.container}>
      {allWorks.map((work, i) => {
        const isToday = work[1] === 'Today';
        return (
          <Block
            card
            row
            center
            space="between"
            style={
              isToday && {
                backgroundColor: theme.colors.primary,
              }
            }
            color={i % 2 ? theme.colors.white : theme.colors.gray2}
            key={`${work[0].workName}${work[1]}`}
          >
            <Text color={isToday && theme.colors.white} bold={!!isToday}>
              {work[0].date[1]}. {work[0].date[0]}
            </Text>
            {work[0].workName && <Text>{workNameToNative(work[0].workName)}</Text>}
            <Badge size={30}>
              <Image source={plantStringToImage(work[1])} />
            </Badge>
            <Text light color={isToday ? theme.colors.white : theme.colors.gray}>
              {daysToPlan(work, todayIndex)}
            </Text>
          </Block>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.sizes.base,
    backgroundColor: theme.colors.backgorund,
  },
});

const daysToPlan = (work, todayIndex) => {
  const daysAll =
    monthsDays.reduce(
      (a, b, index) => (index < months.indexOf(work[0].date[0]) ? a + b : a),
      work[0].date[1]
    ) -
    todayIndex -
    1;
  if (daysAll === 0) {
    return 'Danas';
  }
  const days = daysAll < 0 ? 365 + daysAll : daysAll;
  return `Za ${Math.floor(days / 30)} meseca \n${days % 30} dana`;
};

const months = [
  'januar',
  'februar',
  'mart',
  'april',
  'maj',
  'jun',
  'jul',
  'avgust',
  'septembar',
  'oktobar',
  'novembar',
  'decembar',
];

const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default CalendarScreen;
