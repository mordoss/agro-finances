import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { theme } from '../../theme';

import Corn from './plants/Corn';

const Works = () => {
  const plant = useSelector(state => state.plant);
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      horizontal
      pagingEnabled
    >
      {plant === 'Kukuruz' && <Corn />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: theme.sizes.base * 2,
    marginVertical: theme.sizes.base,
  },
});

export default Works;
