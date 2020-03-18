import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Block, Text, Badge } from '../components';
import usePlanedWorks from '../hooks/usePlanedWorks';
import { workNameToNative, plantStringToImage, dateToString } from '../helperFunctions';

import { theme } from '../theme';

const CalendarScreen = () => {
  const today = new Date();
  const works0 = usePlanedWorks(0);
  const works1 = usePlanedWorks(1);
  const works2 = usePlanedWorks(2);
  const works3 = usePlanedWorks(3);

  const allWorks = [...works0, ...works1, ...works2, ...works3]
    .map(work => ({
      ...work,
      days: Math.round(work.date - today / 86400000),
    }))
    .sort((a, b) => a.days - b.days);

  return (
    <ScrollView style={styles.container}>
      {allWorks.map((work, i) => {
        const date = new Date(work[0].date);
        const { days, workName } = work[0];
        console.log(days);

        return (
          <Block
            card
            row
            center
            space="between"
            color={i % 2 ? theme.colors.white : theme.colors.gray2}
            key={`${work[0].workName}${work[1]}`}
          >
            <Text style={[styles.flexItem, { flexBasis: '25%' }]}>{dateToString(date)}</Text>
            <Badge size={30} style={[styles.flexItem, { flexBasis: '15%' }]}>
              <Image source={plantStringToImage(work[1])} />
            </Badge>

            <Text style={[styles.flexItem, { flexBasis: '20%' }]}>
              {workNameToNative(workName)}
            </Text>

            <Text
              light
              right
              color={theme.colors.gray}
              style={[styles.flexItem, { flexBasis: '40%' }]}
            >
              {days}
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
  flexItem: {
    flexGrow: 0,
    flexShrink: 0,
  },
});

export default CalendarScreen;
