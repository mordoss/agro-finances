import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text, Badge } from '../components';

import { theme } from '../theme';

import {
  workNameToNative,
  plantStringToImage,
  dateToString
} from '../utils/helperFunctions';

const CalendarItem = ({ work, i }) => {
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
    >
      <Badge size={30} style={[styles.flexItem, { flexBasis: '15%' }]}>
        <Image source={plantStringToImage(work[1])} />
      </Badge>

      <Text gray style={[styles.flexItem, { flexBasis: '30%' }]}>
        {workNameToNative(workName)}
      </Text>

      <Text caption gray style={[styles.flexItem, { flexBasis: '20%' }]}>
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
};

export default CalendarItem;
const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.base * 2
  },
  flexItem: {
    flexGrow: 0,
    flexShrink: 0
  }
});
