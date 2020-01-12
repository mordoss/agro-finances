import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Block, Text, Badge } from '../components';
import usePlanedWorks from '../hooks/usePlanedWorks';
import { workNameToNative, plantStringToImage } from '../helperFunctions';

import { theme } from '../theme';

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
const CalendarScreen = () => {
  const works0 = usePlanedWorks(0);
  const works1 = usePlanedWorks(1);
  const works2 = usePlanedWorks(2);
  const works3 = usePlanedWorks(3);

  const allWorks = [
    ...works0,
    ...works1,
    ...works2,
    ...works3,
    [{ date: ['jul', 12], workName: 'danas' }, 'hrana'],
  ].sort((a, b) => {
    const indexA = months.indexOf(a[0].date[0]);
    const indexB = months.indexOf(b[0].date[0]);
    return indexA === indexB ? a[0].date[1] - b[0].date[1] : indexA - indexB;
  });

  return (
    <ScrollView>
      {allWorks.map((work, i) => (
        <Block
          card
          row
          space="around"
          color={i % 2 ? theme.colors.white : theme.colors.gray2}
          key={`${work[0].workName}${work[1]}`}
        >
          <Text>{work[0].date}</Text>
          <Text>{workNameToNative(work[0].workName)}</Text>
          <Badge size={30}>
            <Image source={plantStringToImage(work[1])} />
          </Badge>
        </Block>
      ))}
    </ScrollView>
  );
};

export default CalendarScreen;
