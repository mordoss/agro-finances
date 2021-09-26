import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Block, Text, Badge } from '../components';
import usePlanedWorks from '../hooks/usePlanedWorks';
import {
  workNameToNative,
  plantStringToImage,
  dateToString
} from '../utils/helperFunctions';
import { theme } from '../theme';

const CalendarScreen = () => {
  const today = new Date();
  const numberOfFields = useSelector(state => state.fields.length);

  const fieldsArr = [...Array(numberOfFields).keys()].map(field =>
    usePlanedWorks(field)
  );

  const filedsArrPlus = fieldsArr
    .filter(arr => arr.length)
    .map(work => ({
      ...work
    }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filedsArrPlus.map((field, i) => {
        const works = Object.values(field);
        return works.map(work => {
          const date = work[0].date && new Date(work[0].date);
          const { workName } = work[0];

          return (
            <Block
              card
              row
              center
              space="between"
              style={styles.card}
              color={i % 2 ? theme.colors.white : theme.colors.gray2}
              key={`${work[0].workName}${work[1]}`}
            >
              <Badge size={30} style={[styles.flexItem, { flexBasis: '15%' }]}>
                <Image source={plantStringToImage(work[1])} />
              </Badge>

              <Text gray style={[styles.flexItem, { flexBasis: '30%' }]}>
                {workNameToNative(workName)}
              </Text>

              <Text
                caption
                gray
                style={[styles.flexItem, { flexBasis: '20%' }]}
              >
                {date ? dateToString(date) : 'datum nije izabran'}
              </Text>

              <Text
                bold
                right
                color={theme.colors.gray}
                style={[styles.flexItem, { flexBasis: '20%' }]}
              >
                {/* {days === 0 && 'Danas'}
                {date && days !== 0 ? `za ${days} dan` : ''} */}
              </Text>
            </Block>
          );
        });
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.sizes.base,
    backgroundColor: theme.colors.backgorund
  },
  card: {
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.base * 2
  },
  flexItem: {
    flexGrow: 0,
    flexShrink: 0
  }
});

export default CalendarScreen;
